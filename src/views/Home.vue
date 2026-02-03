<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const samples = ref([]);
const contactInfo = ref(null);
const showCopySuccess = ref(false);
const copySuccessText = ref('');
const currentLanguage = ref('zh'); // zh: 中文, en: 英文

// 语言切换
const toggleLanguage = () => {
  currentLanguage.value = currentLanguage.value === 'zh' ? 'en' : 'zh';
};

// 双语文本
const texts = {
  zh: {
    nav: {
      factory: '工厂介绍',
      products: '产品展示',
      samples: '样品列表',
      contact: '联系我们'
    },
    sections: {
      factory: '我们的工厂',
      products: '产品展示',
      samples: '样品列表',
      contact: '联系我们'
    },
    factory: {
      description: '渝隆注塑是一家专业的注塑制造企业，拥有先进的生产设备和技术团队。我们致力于为客户提供高品质的注塑产品，从设计到生产的一站式服务。凭借多年的行业经验，我们已经成为行业内的佼佼者，为众多知名企业提供优质产品。',
      features: {
        equipment: '先进设备',
        team: '专业团队',
        quality: '品质保证',
        custom: '定制服务'
      },
      featuresDesc: {
        equipment: '引进国际先进的注塑设备，确保产品精度和质量',
        team: '拥有经验丰富的技术人员和管理团队',
        quality: '严格的质量控制体系，确保每一件产品都符合标准',
        custom: '根据客户需求提供个性化的产品设计和生产方案'
      }
    },
    contact: {
      address: '地址',
      phone: '电话',
      email: '邮箱',
      hours: '工作时间'
    },
    footer: {
      copyright: '渝隆注塑'
    },
    copy: {
      success: '复制成功！'
    }
  },
  en: {
    nav: {
      factory: 'Factory',
      products: 'Products',
      samples: 'Samples',
      contact: 'Contact'
    },
    sections: {
      factory: 'Our Factory',
      products: 'Products',
      samples: 'Sample List',
      contact: 'Contact Us'
    },
    factory: {
      description: 'Yulong Injection Molding is a professional injection molding manufacturer with advanced production equipment and technical team. We are committed to providing customers with high-quality injection molding products, offering one-stop service from design to production. With years of industry experience, we have become a leader in the industry, providing high-quality products for many well-known enterprises.',
      features: {
        equipment: 'Advanced Equipment',
        team: 'Professional Team',
        quality: 'Quality Assurance',
        custom: 'Custom Service'
      },
      featuresDesc: {
        equipment: 'Introduce internationally advanced injection molding equipment to ensure product precision and quality',
        team: 'Have experienced technical personnel and management team',
        quality: 'Strict quality control system to ensure every product meets standards',
        custom: 'Provide personalized product design and production solutions according to customer needs'
      }
    },
    contact: {
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Working Hours'
    },
    footer: {
      copyright: 'Yulong Injection Molding'
    },
    copy: {
      success: 'Copied successfully!'
    }
  }
};

const factorySlides = ref([
  {
    id: 1,
    image: 'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20plastic%20injection%20factory%20interior%20with%20machines%20clean%20organized%20high%20tech&image_size=landscape_16_9',
    caption: '先进的注塑生产设备',
    captionEn: 'Advanced Injection Molding Equipment'
  },
  {
    id: 2,
    image: 'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20injection%20molding%20quality%20control%20process%20professional&image_size=landscape_16_9',
    caption: '严格的质量控制流程',
    captionEn: 'Strict Quality Control Process'
  },
  {
    id: 3,
    image: 'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20plastic%20injection%20factory%20team%20working%20modern&image_size=landscape_16_9',
    caption: '专业的技术团队',
    captionEn: 'Professional Technical Team'
  }
]);

// 加载模拟数据
onMounted(async () => {
  try {
    // 使用内置模拟数据
    samples.value = [
      {
        id: 1,
        name: '塑料外壳',
        category: '电子设备',
        description: '高精度注塑塑料外壳，适用于电子设备',
        image: 'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20injection%20molded%20electronic%20device%20housing%20white%20color%20high%20precision&image_size=square'
      },
      {
        id: 2,
        name: '汽车零部件',
        category: '汽车配件',
        description: '耐用的汽车塑料零部件，符合行业标准',
        image: 'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20plastic%20parts%20engine%20component%20black%20color&image_size=square'
      },
      {
        id: 4,
        name: '日常用品',
        category: '家居用品',
        description: '高品质日常塑料用品，美观实用',
        image: 'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20household%20items%20colorful%20modern%20design&image_size=square'
      },
      {
        id: 5,
        name: '玩具配件',
        category: '玩具',
        description: '安全环保的玩具塑料配件',
        image: 'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20toy%20parts%20colorful%20safe%20children&image_size=square'
      },
      {
        id: 6,
        name: '包装容器',
        category: '包装',
        description: '高品质塑料包装容器，密封性好',
        image: 'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20packaging%20containers%20transparent%20high%20quality&image_size=square'
      }
    ];
    
    contactInfo.value = {
      address: '东莞市横沥镇横沥村糖厂路26号1号楼',
      phone: '13713092426',
      email: 'jacky-ads@163.com',
      workingHours: '周一至周五 8:00-18:00'
    };
  } catch (error) {
    console.error('Error loading data:', error);
  }
});

// 滚动到指定部分
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

// 跳转到产品列表
const goToProducts = () => {
  router.push('/products');
};

// 复制文本到剪贴板
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      // 显示复制成功提示
      showCopySuccess.value = true;
      copySuccessText.value = texts[currentLanguage.value].copy.success;
      // 1秒后自动隐藏提示
      setTimeout(() => {
        showCopySuccess.value = false;
      }, 1000);
    })
    .catch(err => {
      console.error('复制失败:', err);
    });
};
</script>

<template>
  <div class="app">
    <!-- 复制成功提示 -->
    <div v-if="showCopySuccess" class="copy-success-toast">
      {{ copySuccessText }}
    </div>
    
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="container">
        <div class="logo" @click="scrollToSection('factory')">{{ texts[currentLanguage].footer.copyright }}</div>
        <div class="nav-links">
          <button @click="scrollToSection('factory')" class="nav-link">{{ texts[currentLanguage].nav.factory }}</button>
          <button @click="scrollToSection('samples')" class="nav-link">{{ texts[currentLanguage].nav.products }}</button>
          <button @click="router.push('/samples')" class="nav-link">{{ texts[currentLanguage].nav.samples }}</button>
          <button @click="scrollToSection('contact')" class="nav-link">{{ texts[currentLanguage].nav.contact }}</button>
          <button @click="toggleLanguage()" class="nav-link language-toggle">
            {{ currentLanguage === 'zh' ? 'EN' : '中文' }}
          </button>
        </div>
      </div>
    </nav>

    <!-- 工厂介绍 -->
    <section id="factory" class="section factory-section">
      <div class="container">
        <h1 class="section-title">{{ texts[currentLanguage].sections.factory }}</h1>
        <div class="factory-content">
          <el-carousel :interval="5000" height="500px" class="factory-carousel">
            <el-carousel-item v-for="slide in factorySlides" :key="slide.id">
              <div class="carousel-item">
                <img :src="slide.image" :alt="slide.caption" class="carousel-image">
                <div class="carousel-caption">{{ currentLanguage === 'zh' ? slide.caption : slide.captionEn }}</div>
              </div>
            </el-carousel-item>
          </el-carousel>
          <div class="factory-info">
            <p class="factory-description">
              {{ texts[currentLanguage].factory.description }}
            </p>
            <div class="factory-features">
              <div class="feature-item">
                <h3>{{ texts[currentLanguage].factory.features.equipment }}</h3>
                <p>{{ texts[currentLanguage].factory.featuresDesc.equipment }}</p>
              </div>
              <div class="feature-item">
                <h3>{{ texts[currentLanguage].factory.features.team }}</h3>
                <p>{{ texts[currentLanguage].factory.featuresDesc.team }}</p>
              </div>
              <div class="feature-item">
                <h3>{{ texts[currentLanguage].factory.features.quality }}</h3>
                <p>{{ texts[currentLanguage].factory.featuresDesc.quality }}</p>
              </div>
              <div class="feature-item">
                <h3>{{ texts[currentLanguage].factory.features.custom }}</h3>
                <p>{{ texts[currentLanguage].factory.featuresDesc.custom }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 产品展示 -->
    <section id="samples" class="section">
      <div class="container">
        <h1 class="section-title">{{ texts[currentLanguage].sections.products }}</h1>
        
        <div class="samples-grid">
          <div 
            v-for="sample in samples.slice(0, 6)" 
            :key="sample.id" 
            class="sample-card"
            @click="router.push(`/samples?category=${sample.category}`)"
          >
            <div class="sample-image">
              <img :src="sample.image" :alt="sample.name">
            </div>
            <h2 class="sample-name">{{ sample.name }}</h2>
            <p class="sample-description">{{ sample.description }}</p>
            <div class="sample-overlay">
              <span class="view-all">查看全部产品</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 联系我们 -->
    <section id="contact" class="section">
      <div class="container">
        <h1 class="section-title">{{ texts[currentLanguage].sections.contact }}</h1>
        <div class="contact-content" v-if="contactInfo">
          <div class="contact-item copyable">
            <h3>{{ texts[currentLanguage].contact.address }}</h3>
            <p>{{ contactInfo.address }}</p>
            <button class="copy-button" @click="copyToClipboard(contactInfo.address)">{{ currentLanguage === 'zh' ? '复制' : 'Copy' }}</button>
          </div>
          <div class="contact-item copyable">
            <h3>{{ texts[currentLanguage].contact.phone }}</h3>
            <p>{{ contactInfo.phone }}</p>
            <button class="copy-button" @click="copyToClipboard(contactInfo.phone)">{{ currentLanguage === 'zh' ? '复制' : 'Copy' }}</button>
          </div>
          <div class="contact-item copyable">
            <h3>{{ texts[currentLanguage].contact.email }}</h3>
            <p>{{ contactInfo.email }}</p>
            <button class="copy-button" @click="copyToClipboard(contactInfo.email)">{{ currentLanguage === 'zh' ? '复制' : 'Copy' }}</button>
          </div>
          <div class="contact-item">
            <h3>{{ texts[currentLanguage].contact.hours }}</h3>
            <p>{{ contactInfo.workingHours }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">{{ texts[currentLanguage].footer.copyright }}</div>
          <div class="footer-links">
            <button @click="scrollToSection('factory')" class="footer-link">{{ texts[currentLanguage].nav.factory }}</button>
            <button @click="scrollToSection('samples')" class="footer-link">{{ texts[currentLanguage].nav.products }}</button>
            <button @click="router.push('/samples')" class="footer-link">{{ texts[currentLanguage].nav.samples }}</button>
            <button @click="scrollToSection('contact')" class="footer-link">{{ texts[currentLanguage].nav.contact }}</button>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} {{ texts[currentLanguage].footer.copyright }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #ffffff;
  overflow-x: hidden;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
}

/* 导航栏 */
.navbar {
  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid #f0f0f0;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
}

.logo {
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  cursor: pointer;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-link {
  background: none;
  border: none;
  font-size: 14px;
  color: #666666;
  cursor: pointer;
  padding: 8px 0;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #000000;
}

/* 语言切换按钮 */
.language-toggle {
  border: none;
  padding: 6px 12px;
  border-radius: 16px;
  margin-left: 16px;
}

.language-toggle:hover {
  background-color: #f0f0f0;
}

/* 通用区块样式 */
.section {
  padding: 120px 0;
  border-bottom: 1px solid #f0f0f0;
}

.section-title {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 60px;
  text-align: center;
}

/* 工厂介绍 */
.factory-content {
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 40px;
}

.factory-carousel {
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.carousel-item {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-width: 100%;
  min-height: 100%;
}

.carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  z-index: 10;
}

/* Element Plus 轮播图样式调整 */
:deep(.el-carousel__item) {
  overflow: hidden;
}

:deep(.el-carousel__indicators--outside) {
  margin-top: 20px;
}

:deep(.el-carousel__button) {
  background-color: #d9d9d9;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

:deep(.el-carousel__button.is-active) {
  background-color: #000000;
}


.factory-description {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 60px;
  color: #666666;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.factory-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
}

.feature-item {
  text-align: center;
  padding: 20px 0;
}

.feature-item h3 {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #000000;
  letter-spacing: 0.5px;
}

.feature-item p {
  font-size: 14px;
  color: #999999;
  line-height: 1.6;
}

/* 产品展示 */
.section-subtitle {
  font-size: 16px;
  text-align: center;
  margin-bottom: 40px;
  color: #666;
}

/* 分类筛选 */
.category-filter {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.category-button {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-button:hover {
  background-color: #e9ecef;
  color: #333;
}

.category-button.active {
  background-color: #000;
  color: white;
  border-color: #000;
}

.samples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.sample-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  position: relative;
}

.sample-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.sample-image {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  min-height: 200px;
}

.sample-image img {
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  transition: none;
}

.sample-card:hover .sample-image img {
  transform: none;
}

.sample-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 10;
  border-radius: 8px;
}

.sample-card:hover .sample-overlay {
  opacity: 1;
}

.view-all {
  color: white;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border-radius: 20px;
}

.sample-name {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
}

.sample-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  text-align: center;
}

/* 联系我们 */
.contact-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.contact-item {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #e9ecef;
}

.contact-item {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #e9ecef;
  position: relative;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.contact-item h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
}

.contact-item p {
  font-size: 16px;
  color: #666;
}

/* 复制按钮样式 */
.copy-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-item.copyable:hover .copy-button {
  opacity: 1;
}

.copy-button:hover {
  background-color: rgba(0, 0, 0, 1);
}

/* 复制成功提示样式 */
.copy-success-toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  z-index: 9999;
  animation: fadeInOut 1s ease-in-out;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  80% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
}

/* 页脚 */
.footer {
  background-color: #f9f9f9;
  padding: 60px 0;
  border-top: 1px solid #f0f0f0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.footer-logo {
  font-size: 20px;
  font-weight: 500;
}

.footer-links {
  display: flex;
  gap: 30px;
}

.footer-link {
  background: none;
  border: none;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #000;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #f0f0f0;
  font-size: 14px;
  color: #999;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .navbar .container {
    flex-direction: column;
    gap: 16px;
    padding: 16px 20px;
  }
  
  .nav-links {
    gap: 20px;
  }
  
  .nav-link {
    font-size: 16px;
    padding: 10px 0;
  }
  
  .section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  .samples-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .sample-card {
    padding: 16px;
  }
  
  .sample-name {
    font-size: 16px;
  }
  
  .sample-description {
    font-size: 14px;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .contact-item {
    padding: 20px;
  }
  
  .contact-item h3 {
    font-size: 16px;
  }
  
  .contact-item p {
    font-size: 14px;
  }
  
  .copy-button {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  
  .footer-links {
    justify-content: center;
    gap: 20px;
  }
  
  .footer-link {
    font-size: 14px;
  }
}

/* 小屏幕手机优化 */
@media (max-width: 480px) {
  .nav-links {
    gap: 16px;
  }
  
  .section {
    padding: 40px 0;
  }
  
  .section-title {
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  .sample-card {
    padding: 12px;
  }
  
  .samples-grid {
    gap: 20px;
  }
  
  .contact-item {
    padding: 16px;
  }
  
  .footer-content {
    gap: 20px;
  }
  
  .footer-links {
    gap: 16px;
  }
}
</style>
