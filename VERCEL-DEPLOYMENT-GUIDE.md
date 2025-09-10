# Guide de déploiement Vercel - Configuration sécurisée

## Configuration des variables d'environnement sur Vercel

### 1. Accéder à votre projet Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous à votre compte
3. Sélectionnez votre projet `lahamarchand-gabon`

### 2. Configurer les variables d'environnement

1. Dans votre projet, allez dans **Settings** (Paramètres)
2. Cliquez sur **Environment Variables** (Variables d'environnement)
3. Ajoutez les variables suivantes :

#### Variables à ajouter :

| Nom de la variable | Valeur | Environnements |
|-------------------|--------|----------------|
| `NEXTAUTH_URL` | `https://lahamarchand-gabon.vercel.app` | Production, Preview, Development |
| `NEXTAUTH_SECRET` | `6IC4hL4tke/DJSfeUh4dA2HkBxxL/fN6G6LdemSxHrE=` | Production, Preview, Development |
| `DATABASE_URL` | `votre-url-de-base-de-données` | Production, Preview, Development |

### 3. Valeurs à utiliser

#### NEXTAUTH_URL
```
https://lahamarchand-gabon.vercel.app
```
*Remplacez par votre vrai domaine Vercel si différent*

#### NEXTAUTH_SECRET
```
6IC4hL4tke/DJSfeUh4dA2HkBxxL/fN6G6LdemSxHrE=
```
*Clé secrète générée automatiquement - gardez-la secrète !*

#### DATABASE_URL
```
postgresql://username:password@host:port/database_name
```
*Remplacez par votre vraie URL de base de données*

### 4. Exemple d'URL de base de données

Si vous utilisez une base de données PostgreSQL hébergée (comme Supabase, Railway, ou PlanetScale) :

```
postgresql://postgres:motdepasse123@db.xyz.supabase.co:5432/postgres
```

### 5. Redéploiement

Après avoir ajouté toutes les variables d'environnement :

1. Allez dans l'onglet **Deployments**
2. Cliquez sur **Redeploy** sur le dernier déploiement
3. Ou poussez un nouveau commit pour déclencher un nouveau déploiement

### 6. Vérification

Pour vérifier que tout fonctionne :

1. Votre application devrait se déployer sans erreur
2. La page de connexion devrait être accessible
3. L'authentification devrait fonctionner

### 7. Sécurité

✅ **Avantages de cette méthode :**
- Les secrets ne sont pas visibles dans le code
- Chaque environnement peut avoir ses propres valeurs
- Les secrets sont chiffrés sur Vercel
- Facile à gérer via l'interface web

### 8. Développement local

Pour le développement local, créez un fichier `.env.local` :

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=6IC4hL4tke/DJSfeUh4dA2HkBxxL/fN6G6LdemSxHrE=
DATABASE_URL=postgresql://username:password@localhost:5432/lahamarchand_dev
```

### 9. Dépannage

Si vous avez encore des erreurs :

1. Vérifiez que toutes les variables sont bien ajoutées
2. Vérifiez que l'URL de base de données est correcte
3. Vérifiez que le domaine NEXTAUTH_URL correspond à votre domaine Vercel
4. Redéployez après chaque modification

### 10. Support

Si vous rencontrez des problèmes :
- Consultez les logs de déploiement dans Vercel
- Vérifiez que votre base de données est accessible depuis l'extérieur
- Assurez-vous que NextAuth est correctement configuré
