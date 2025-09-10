# Guide de sécurité PDG

## 🔐 Accès sécurisé au compte PDG

### **Page de connexion dédiée**
- **URL** : `https://lahamarchand-gabon.vercel.app/pdg-login`
- **Accès** : Réservé aux administrateurs uniquement
- **Interface** : Page spéciale avec design sécurisé

### **Informations de connexion**
- **Email** : `pdg@lahamarchand.com`
- **Mot de passe** : `PDG2024!Secure`
- **Dashboard** : `https://lahamarchand-gabon.vercel.app/dashboard/pdg`

## 🛡️ Mesures de sécurité implémentées

### **1. Inscription publique bloquée**
- ❌ Le rôle PDG n'apparaît pas dans le formulaire d'inscription
- ❌ L'API d'inscription rejette les tentatives de création de comptes PDG
- ✅ Seuls les rôles autorisés peuvent s'inscrire : Client, Partenaire, Auteur, Concepteur

### **2. Page de connexion sécurisée**
- ✅ Page dédiée `/pdg-login` avec design spécial
- ✅ Interface simplifiée (email + mot de passe uniquement)
- ✅ Messages d'erreur génériques pour éviter les fuites d'informations
- ✅ Redirection automatique vers le dashboard PDG

### **3. API de création protégée**
- ✅ API `/api/create-pdg` protégée par clé secrète
- ✅ Accessible uniquement aux développeurs
- ✅ Vérification d'authentification requise

## 🚀 Utilisation

### **Pour le PDG :**
1. Aller sur `https://lahamarchand-gabon.vercel.app/pdg-login`
2. Saisir l'email : `pdg@lahamarchand.com`
3. Saisir le mot de passe : `PDG2024!Secure`
4. Cliquer sur "Se connecter"
5. Être redirigé vers le dashboard PDG

### **Pour les utilisateurs normaux :**
1. Aller sur `https://lahamarchand-gabon.vercel.app/register`
2. Choisir un rôle autorisé (Client, Partenaire, Auteur, Concepteur)
3. Remplir le formulaire d'inscription
4. Attendre la validation selon le rôle choisi

## 🔧 Maintenance

### **Changer le mot de passe PDG :**
1. Se connecter au dashboard PDG
2. Aller dans les paramètres du profil
3. Changer le mot de passe
4. Notifier l'équipe technique du nouveau mot de passe

### **Créer un nouveau compte PDG (développeurs uniquement) :**
```bash
# Avec la clé secrète
curl -X POST https://lahamarchand-gabon.vercel.app/api/create-pdg \
  -H "Authorization: Bearer YOUR_SECRET_KEY" \
  -H "Content-Type: application/json"
```

## ⚠️ Recommandations de sécurité

1. **Changer le mot de passe par défaut** après la première connexion
2. **Ne pas partager** l'URL `/pdg-login` publiquement
3. **Utiliser HTTPS** uniquement pour les connexions
4. **Surveiller les logs** de connexion PDG
5. **Sauvegarder régulièrement** les données importantes

## 📊 Avantages de cette approche

- ✅ **Sécurité renforcée** : Pas d'inscription publique PDG
- ✅ **Interface dédiée** : Page de connexion spéciale
- ✅ **Contrôle d'accès** : Seuls les administrateurs peuvent se connecter
- ✅ **Expérience utilisateur** : Interface simplifiée pour le PDG
- ✅ **Maintenance facile** : Gestion centralisée des accès

## 🆘 Support

En cas de problème :
1. Vérifier que la base de données est accessible
2. Vérifier que le compte PDG existe
3. Contacter l'équipe technique
4. Utiliser l'API de création si nécessaire
