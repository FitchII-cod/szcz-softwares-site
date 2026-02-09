const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configuration SMTP via variables d'environnement Firebase
// Configurer avec : firebase functions:secrets:set SMTP_HOST, SMTP_USER, SMTP_PASS
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.ionos.fr",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || "dev@szczsoftwares.fr",
    pass: process.env.SMTP_PASS || "",
  },
});

exports.contactForm = onRequest(
  { cors: ["https://szcz-softwares.com", "https://szczsoftwares.fr"] },
  async (req, res) => {
    // Uniquement POST
    if (req.method !== "POST") {
      res.status(405).json({ error: "Methode non autorisee" });
      return;
    }

    const { name, email, message } = req.body;

    // Validation
    if (!name || name.trim().length < 2) {
      res.status(400).json({ error: "Nom invalide (minimum 2 caracteres)" });
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.status(400).json({ error: "Adresse e-mail invalide" });
      return;
    }
    if (!message || message.trim().length < 10) {
      res.status(400).json({ error: "Message trop court (minimum 10 caracteres)" });
      return;
    }

    // Nettoyage basique anti-injection
    const clean = (str) => str.replace(/<[^>]*>/g, "").trim();
    const safeName = clean(name);
    const safeEmail = clean(email);
    const safeMessage = clean(message);

    try {
      // Sauvegarder dans Firestore
      await admin.firestore().collection("contacts").add({
        name: safeName,
        email: safeEmail,
        message: safeMessage,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      // Envoyer l'email
      await transporter.sendMail({
        from: `"SZCZ Softwares" <dev@szczsoftwares.fr>`,
        to: "dev@szczsoftwares.fr",
        replyTo: safeEmail,
        subject: `[Contact Site] Message de ${safeName}`,
        text: `Nom : ${safeName}\nEmail : ${safeEmail}\n\nMessage :\n${safeMessage}`,
        html: `
          <h2>Nouveau message depuis le site</h2>
          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Email :</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <hr>
          <p>${safeMessage.replace(/\n/g, "<br>")}</p>
        `,
      });

      res.status(200).json({ success: true, message: "Message envoye avec succes" });
    } catch (error) {
      console.error("Erreur envoi contact:", error);
      res.status(500).json({ error: "Erreur serveur, veuillez reessayer" });
    }
  }
);
