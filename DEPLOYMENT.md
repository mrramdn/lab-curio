# Lab Curio - Deployment Guide

## 🚀 Vercel Deployment

### Prerequisites
- Node.js 18+ 
- pnpm package manager
- Vercel account

### Quick Deploy

1. **Connect to Vercel:**
   ```bash
   npx vercel
   ```

2. **Or deploy via GitHub:**
   - Push your code to GitHub
   - Connect repository to Vercel
   - Auto-deploy on every push

### Environment Variables
No environment variables required for basic deployment.

### Performance Optimizations
- ✅ Image optimization with WebP/AVIF
- ✅ Bundle optimization with Turbopack
- ✅ Static generation where possible
- ✅ Edge runtime for API routes
- ✅ Compression enabled
- ✅ Security headers configured

### Features Included
- 🎨 Glass morphism design
- 🌊 Fluid animations
- 📱 Responsive design
- ♿ Accessibility support
- 🌙 Dark mode
- ⚡ Performance optimized
- 🔒 Security headers

### Build Commands
```bash
# Development
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

### Custom Domain
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain
5. Configure DNS records

### Analytics
Vercel Analytics is automatically enabled for performance monitoring.

## 🎯 Performance Metrics
- Lighthouse Score: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms

## 🔧 Troubleshooting

### Build Issues
- Ensure Node.js 18+ is used
- Clear `.next` folder and rebuild
- Check for TypeScript errors

### Performance Issues
- Enable Vercel Analytics
- Check bundle size with `pnpm build`
- Optimize images and assets

### Animation Issues
- Check `prefers-reduced-motion` support
- Verify CSS animations are working
- Test on different devices

## 📞 Support
For deployment issues, check:
1. Vercel documentation
2. Next.js deployment guide
3. Project README.md
