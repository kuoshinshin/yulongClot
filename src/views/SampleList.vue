<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const samples = ref([]);
const selectedCategory = ref('all');
const categories = ref(['all', '电子设备', '汽车配件', '家居用品', '玩具', '包装']);
const currentLanguage = ref('zh'); // zh: 中文, en: 英文
const showModal = ref(false);
const selectedProduct = ref(null);

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
      samples: '样品列表'
    },
    samples: {
      description: '浏览我们的注塑产品系列',
      back: '返回首页',
      categories: {
        all: '全部',
        '电子设备': '电子设备',
        '汽车配件': '汽车配件',
        '家居用品': '家居用品',
        '玩具': '玩具',
        '包装': '包装'
      }
    },
    footer: {
      copyright: '渝隆注塑'
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
      samples: 'Sample List'
    },
    samples: {
      description: 'Browse our injection molding product series',
      back: 'Back to Home',
      categories: {
        all: 'All',
        '电子设备': 'Electronic Devices',
        '汽车配件': 'Automotive Parts',
        '家居用品': 'Household Items',
        '玩具': 'Toys',
        '包装': 'Packaging'
      }
    },
    footer: {
      copyright: 'Yulong Injection Molding'
    }
  }
};

// 加载模拟数据
onMounted(async () => {
  try {
    // 检查URL参数中的分类
    if (route.query.category) {
      selectedCategory.value = route.query.category;
    }
    
    // 使用内置模拟数据
    samples.value = [
      {
        id: 1,
        name: '塑料外壳',
        category: '电子设备',
        description: '高精度注塑塑料外壳，适用于电子设备',
        images: [
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20injection%20molded%20electronic%20device%20housing%20white%20color%20high%20precision&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20electronic%20housing%20side%20view%20white%20color&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20electronic%20housing%20back%20view%20white%20color&image_size=square'
        ],
        specs: {
          material: 'ABS塑料',
          color: '白色',
          precision: '±0.05mm',
          application: '电子设备外壳',
          certification: 'ISO 9001'
        }
      },
      {
        id: 2,
        name: '汽车零部件',
        category: '汽车配件',
        description: '耐用的汽车塑料零部件，符合行业标准',
        images: [
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20plastic%20parts%20engine%20component%20black%20color&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20plastic%20part%20side%20view%20black%20color%20industrial&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20plastic%20part%20detail%20view%20black%20color%20durable&image_size=square'
        ],
        specs: {
          material: 'PP塑料',
          color: '黑色',
          precision: '±0.1mm',
          application: '汽车发动机部件',
          certification: 'ISO/TS 16949'
        }
      },
      {
        id: 4,
        name: '日常用品',
        category: '家居用品',
        description: '高品质日常塑料用品，美观实用',
        images: [
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20household%20items%20colorful%20modern%20design&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20household%20item%20side%20view%20colorful%20modern&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20household%20item%20detail%20view%20colorful%20practical&image_size=square'
        ],
        specs: {
          material: 'PP塑料',
          color: '多彩',
          precision: '±0.2mm',
          application: '日常家居用品',
          certification: 'ISO 9001'
        }
      },
      {
        id: 5,
        name: '玩具配件',
        category: '玩具',
        description: '安全环保的玩具塑料配件',
        images: [
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20toy%20parts%20colorful%20safe%20children&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20toy%20part%20side%20view%20colorful%20fun&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20toy%20part%20detail%20view%20colorful%20child%20safe&image_size=square'
        ],
        specs: {
          material: 'PE塑料',
          color: '多彩',
          precision: '±0.15mm',
          application: '儿童玩具配件',
          certification: 'EN71'
        }
      },
      {
        id: 6,
        name: '包装容器',
        category: '包装',
        description: '高品质塑料包装容器，密封性好',
        images: [
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20packaging%20containers%20transparent%20high%20quality&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20packaging%20container%20side%20view%20transparent&image_size=square',
          'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20packaging%20container%20detail%20view%20transparent%20sealed&image_size=square'
        ],
        specs: {
          material: 'PET塑料',
          color: '透明',
          precision: '±0.1mm',
          application: '食品包装容器',
          certification: 'FDA'
        }
      }
    ];
  } catch (error) {
    console.error('Error loading data:', error);
  }
});

// 跳转到首页
const goToHome = () => {
  router.push('/');
};

// 查看产品详情
const viewProductDetail = (product) => {
  selectedProduct.value = product;
  showModal.value = true;
};

// 关闭弹窗
const closeModal = () => {
  showModal.value = false;
  selectedProduct.value = null;
};
</script>

<template>
  <div class="sample-list">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="container">
        <div class="logo" @click="goToHome">{{ texts[currentLanguage].footer.copyright }}</div>
        <div class="nav-links">
          <button @click="goToHome" class="nav-link">{{ texts[currentLanguage].nav.factory }}</button>
          <button @click="goToHome" class="nav-link">{{ texts[currentLanguage].nav.products }}</button>
          <button @click="goToHome" class="nav-link">{{ texts[currentLanguage].nav.samples }}</button>
          <button @click="goToHome" class="nav-link">{{ texts[currentLanguage].nav.contact }}</button>
          <button @click="toggleLanguage()" class="nav-link language-toggle">
            {{ currentLanguage === 'zh' ? 'EN' : '中文' }}
          </button>
        </div>
      </div>
    </nav>

    <!-- 样品列表页面 -->
    <section class="section sample-list-section">
      <div class="container">
        <button class="back-button" @click="goToHome">{{ texts[currentLanguage].samples.back }}</button>
        <h1 class="section-title">{{ texts[currentLanguage].sections.samples }}</h1>
        <p class="section-subtitle">{{ texts[currentLanguage].samples.description }}</p>
        
        <!-- 分类筛选 -->
        <div class="category-filter">
          <button 
            v-for="category in categories" 
            :key="category"
            class="category-button"
            :class="{ active: selectedCategory === category }"
            @click="selectedCategory = category"
          >
            {{ texts[currentLanguage].samples.categories[category] }}
          </button>
        </div>
        
        <!-- 产品网格 -->
        <div class="samples-grid">
          <div 
            v-for="sample in samples.filter(s => selectedCategory === 'all' || s.category === selectedCategory)" 
            :key="sample.id" 
            class="sample-card"
          >
            <div class="sample-image">
              <img :src="sample.images[0]" :alt="sample.name">
            </div>
            <h2 class="sample-name">{{ sample.name }}</h2>
            <p class="sample-category">{{ sample.category }}</p>
            <p class="sample-description">{{ sample.description }}</p>
            <div class="sample-overlay">
              <span class="view-details" @click="viewProductDetail(sample)">查看详情</span>
            </div>
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
            <button @click="goToHome" class="footer-link">{{ texts[currentLanguage].nav.factory }}</button>
            <button @click="goToHome" class="footer-link">{{ texts[currentLanguage].nav.products }}</button>
            <button @click="goToHome" class="footer-link">{{ texts[currentLanguage].nav.samples }}</button>
            <button @click="goToHome" class="footer-link">{{ texts[currentLanguage].nav.contact }}</button>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} {{ texts[currentLanguage].footer.copyright }}</p>
        </div>
      </div>
    </footer>
    
    <!-- 产品详情弹窗 -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-body">
          <!-- 产品图片轮播 -->
          <div class="modal-image-gallery">
            <div class="main-image">
              <img :src="selectedProduct?.images[0]" :alt="selectedProduct?.name">
            </div>
            <div class="thumbnail-images">
              <img 
                v-for="(img, index) in selectedProduct?.images" 
                :key="index"
                :src="img" 
                :alt="`${selectedProduct?.name} - 角度 ${index + 1}`"
                class="thumbnail"
                :class="{ active: index === 0 }"
              >
            </div>
          </div>
          
          <!-- 产品信息 -->
          <div class="modal-info">
            <h2 class="modal-title">{{ selectedProduct?.name }}</h2>
            <p class="modal-category">{{ selectedProduct?.category }}</p>
            <p class="modal-description">{{ selectedProduct?.description }}</p>
            
            <!-- 产品参数 -->
            <div class="modal-specs">
              <h3 class="specs-title">产品参数</h3>
              <div class="specs-grid">
                <div class="spec-item">
                  <span class="spec-label">材质</span>
                  <span class="spec-value">{{ selectedProduct?.specs?.material }}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">颜色</span>
                  <span class="spec-value">{{ selectedProduct?.specs?.color }}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">精度</span>
                  <span class="spec-value">{{ selectedProduct?.specs?.precision }}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">应用</span>
                  <span class="spec-value">{{ selectedProduct?.specs?.application }}</span>
                </div>
                <div class="spec-item">
                  <span class="spec-label">认证</span>
                  <span class="spec-value">{{ selectedProduct?.specs?.certification }}</span>
                </div>
              </div>
            </div>
            
            <!-- 操作按钮 -->
            <div class="modal-actions">
              <button class="modal-button">联系我们</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  max-width: 1200px;
  margin: 0 auto;
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

/* 样品列表页面 */
.sample-list-section {
  padding: 140px 0;
  background-color: #ffffff;
}

.back-button {
  background: none;
  border: none;
  font-size: 14px;
  color: #666666;
  cursor: pointer;
  padding: 8px 0;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s;
}

.back-button:hover {
  color: #000000;
}

.section-title {
  font-size: 32px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 16px;
  color: #000000;
  letter-spacing: -0.5px;
}

.section-subtitle {
  font-size: 16px;
  text-align: center;
  margin-bottom: 80px;
  color: #666666;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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

/* 产品网格 */
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

.view-details {
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

.sample-category {
  font-size: 12px;
  color: #999;
  margin-bottom: 8px;
  text-align: center;
}

.sample-description {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  text-align: center;
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

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background-color: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.3s ease;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  z-index: 10;
  transition: all 0.3s ease;
}

.modal-close:hover {
  color: #000;
  transform: rotate(90deg);
}

.modal-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 40px;
}

/* 产品图片轮播 */
.modal-image-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.main-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  min-height: 300px;
  padding: 20px;
}

.main-image img {
  width: 100%;
  max-height: 400px;
  object-fit: contain;
}

.thumbnail-images {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.thumbnail:hover {
  transform: scale(1.05);
}

.thumbnail.active {
  border-color: #000;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
}

/* 产品信息 */
.modal-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}

.modal-category {
  font-size: 14px;
  color: #999;
  margin: 0;
}

.modal-description {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* 产品参数 */
.modal-specs {
  margin-top: 20px;
}

.specs-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.specs-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.spec-label {
  font-size: 14px;
  color: #666;
}

.spec-value {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

/* 操作按钮 */
.modal-actions {
  margin-top: 30px;
}

.modal-button {
  background-color: #000;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.modal-button:hover {
  background-color: #333;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
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
  
  .sample-list-section {
    padding: 80px 0;
  }
  
  .section-title {
    font-size: 24px;
  }
  
  .section-subtitle {
    font-size: 14px;
    margin-bottom: 40px;
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
  
  /* 弹窗响应式 */
  .modal-body {
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 20px;
  }
  
  .modal-title {
    font-size: 20px;
  }
  
  .modal-content {
    margin: 10px;
  }
  
  .main-image {
    min-height: 180px;
    padding: 10px;
  }
  
  .thumbnail {
    width: 60px;
    height: 60px;
  }
  
  .specs-grid {
    gap: 10px;
  }
  
  .spec-label {
    font-size: 14px;
  }
  
  .spec-value {
    font-size: 14px;
  }
  
  .modal-button {
    padding: 14px 20px;
    font-size: 16px;
  }
}

/* 小屏幕手机优化 */
@media (max-width: 480px) {
  .nav-links {
    gap: 16px;
  }
  
  .sample-list-section {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 20px;
  }
  
  .section-subtitle {
    font-size: 14px;
    margin-bottom: 30px;
  }
  
  .sample-card {
    padding: 12px;
  }
  
  .samples-grid {
    gap: 20px;
  }
  
  .footer-content {
    gap: 20px;
  }
  
  .footer-links {
    gap: 16px;
  }
  
  /* 弹窗响应式 */
  .modal-body {
    padding: 16px;
    gap: 16px;
  }
  
  .modal-title {
    font-size: 18px;
  }
  
  .main-image {
    min-height: 150px;
  }
  
  .thumbnail {
    width: 50px;
    height: 50px;
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .sample-card {
    cursor: default;
  }
  
  .sample-overlay {
    opacity: 0.8;
  }
  
  .view-details {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px 20px;
  }
}
</style>