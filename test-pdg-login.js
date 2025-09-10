function showPDGInfo() {
  const baseURL = 'https://lahamarchand-gabon.vercel.app'
  
  console.log('🏢 Informations d\'accès PDG')
  console.log('=' .repeat(50))
  
  console.log('\n🌐 URLs importantes:')
  console.log('Page de connexion PDG:', `${baseURL}/pdg-login`)
  console.log('Dashboard PDG:', `${baseURL}/dashboard/pdg`)
  console.log('Page d\'inscription publique:', `${baseURL}/register`)
  
  console.log('\n🔐 Informations de connexion PDG:')
  console.log('Email:', 'pdg@lahamarchand.com')
  console.log('Mot de passe:', 'PDG2024!Secure')
  
  console.log('\n🛡️ Sécurité:')
  console.log('✅ Page de connexion dédiée créée')
  console.log('✅ Inscription publique PDG bloquée')
  console.log('✅ API de création protégée')
  console.log('✅ Interface sécurisée')
  
  console.log('\n📋 Instructions:')
  console.log('1. Aller sur la page de connexion PDG')
  console.log('2. Saisir l\'email et le mot de passe')
  console.log('3. Être redirigé vers le dashboard')
  console.log('4. Changer le mot de passe après la première connexion')
  
  console.log('\n⚠️ Important:')
  console.log('- Ne pas partager l\'URL /pdg-login publiquement')
  console.log('- Changer le mot de passe par défaut')
  console.log('- Utiliser uniquement HTTPS')
}

showPDGInfo()
