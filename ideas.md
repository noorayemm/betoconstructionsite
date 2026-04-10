# Beto Construction - Tasarım Felsefesi

## Seçilen Tasarım Yaklaşımı: "Minimalist Teknoloji + Metalik Prestij"

### Design Movement
**Neobrutalisme ile Glassmorphism Füzyonu** - Sağlam, güvenilir yapı endüstrisinin gücünü, modern teknoloji estetiklerinin şeffaflığı ve metalik detaylarla birleştiren tasarım dili.

### Core Principles
1. **Güven Yoluyla Minimalizm**: Her element kasıtlıdır. Boşluk, profesyonelliği vurgular.
2. **Metalik Prestij**: Gümüş gradyanları ve ince ışıltı efektleri, kalite ve dayanıklılığı sembolize eder.
3. **Dinamik Derinlik**: Glassmorphism (blur + transparency) ile statik tasarımı hayata geçirir.
4. **Karanlık Otoriteleri**: Koyu arka planlar, güven ve stabiliteyi iletir; açık metinler okunabilirliği sağlar.

### Color Philosophy
- **Temel Palet**: 
  - Background: `#0A0A0A` (neredeyse siyah, derinlik hissi)
  - Secondary: `#121212`, `#1C1C1C` (katmanlı karanlık)
  - Accent: Metallic Silver `#E8E8E8` → `#A0A0A0` (gradient)
  - Highlight: Subtle Blue Glow `#4A90E2` (0.3 opacity)
  
- **Mantık**: Koyu renk paletinin üzerine metalik gümüş, endüstriyel güç ve teknolojik ilerlemeyi sembolize eder. Mavi glow, güven ve profesyonelliği ekler.

### Layout Paradigm
- **Asimetrik Bölümleme**: Hero bölümü sol-ağır, hizmetler grid'i sağ-ağır.
- **Dikey Ritim**: Bölümler arasında bol boşluk (120px+), nefes alma alanı yaratır.
- **Masonry + Grid Karışımı**: Projeler bölümü masonry, hizmetler bölümü 3-sütunlu grid.

### Signature Elements
1. **Glassmorphic Cards**: Blur + transparency + thin metallic border (1px silver)
2. **Metallic Shine Buttons**: Gradient overlay (left-to-right silver shine), hover'da glow efekti
3. **Diagonal Dividers**: SVG wave/diagonal bölüm ayırıcıları, modern hareket hissi

### Interaction Philosophy
- **Hover → Glow + Lift**: Kartlar hafifçe yukarı çıkar, glow artar
- **Scroll → Fade-In + Slide-Up**: Elementler aşamalı olarak ortaya çıkar
- **Click → Smooth Transition**: Tüm geçişler 300ms cubic-bezier(0.4, 0, 0.2, 1)

### Animation
- **Entrance**: Fade-in (0s → 1s opacity) + translateY (-20px → 0)
- **Stagger**: Her kart 100ms gecikmeli (grid'de)
- **Parallax**: Hero bölümü, scroll sırasında hafif yukarı hareket (10-15% offset)
- **Hover Lift**: transform: translateY(-8px), box-shadow: 0 20px 40px rgba(74, 144, 226, 0.2)

### Typography System
- **Display Font**: `Satoshi` (bold, 700 weight) - başlıklar için
- **Body Font**: `Inter` (400-500 weight) - metin içeriği
- **Hierarchy**:
  - H1: 48px, 700 weight, letter-spacing: -1px
  - H2: 36px, 700 weight, letter-spacing: -0.5px
  - H3: 24px, 600 weight
  - Body: 16px, 400 weight, line-height: 1.6
  - Small: 14px, 400 weight

---

## Tasarım Rehberi (Tüm Dosyalarda Uygulanacak)
- Tüm kartlar: `backdrop-blur-md` + `bg-white/5` + `border border-white/10`
- Tüm butonlar: Metallic gradient + hover glow
- Tüm başlıklar: Satoshi, bold, -1px letter-spacing
- Tüm bölüm geçişleri: Diagonal SVG dividers
- Tüm animasyonlar: Framer Motion, cubic-bezier(0.4, 0, 0.2, 1)
