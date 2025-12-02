#!/bin/bash

echo "🚀 Déploiement ATRM..."

# Build local pour vérifier les erreurs
echo "📦 Build du projet..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
    
    # Deploy sur Vercel
    echo "🌐 Déploiement sur Vercel..."
    vercel --prod
    
    echo "✅ Site déployé avec succès ! 🎉"
else
    echo "❌ Erreur lors du build. Vérifiez les logs."
    exit 1
fi