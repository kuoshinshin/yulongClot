<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const product = ref(null);
const currentImageIndex = ref(0);

// 模拟产品数据，包含多角度图片
const productsData = [
  {
    id: 1,
    name: '塑料外壳',
    category: '电子设备',
    description: '高精度注塑塑料外壳，适用于电子设备',
    images: [
      'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20injection%20molded%20electronic%20device%20housing%20white%20color%20high%20precision&image_size=square',
      'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20housing%20side%20view%20white%20color%20smooth%20surface&image_size=square',
      'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20housing%20back%20view%20white%20color%20precision%20molded&image_size=square'
    ],
    details: {
      material: 'ABS塑料',
      color: '白色',
      precision: '±0.05mm',
      application: '电子设备外壳'
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
    details: {
      material: 'PP塑料',
      color: '黑色',
      certification: 'ISO/TS 16949',
      application: '汽车发动机部件'
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
    details: {
      material: 'PP塑料',
      color: '多彩',
      certification: 'ISO 9001',
      application: '日常家居用品'
    }
  },
  {
    id: 5,
    name: '玩具配件',
    category: '玩具',
    description: '安全环保的玩具塑料配件',
    images: [
      'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20toy%20parts%20colorful%20safe%20children&image_size=square',
      'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20toy%20part%20side%20view%20colorful%20child%20safe&image_size=square',
      'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20toy%20part%20detail%20view%20colorful%20non-toxic&image_size=square'
    ],
    details: {
      material: 'ABS塑料',
      color: '多彩',
      certification: 'EN 71',
      application: '儿童玩具配件'
    }
  },
  {
    id: 6,
    name: '包装容器',
    category: '包装',
    description: '高品质塑料包装容器，密封性好',
    images: [
      'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20packaging%20containers%20transparent%20high%20quality&image_size=square',
      'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20packaging%20container%20side%20view%20transparent%20clear&image_size=square',
      'http://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20packaging%20container%20detail%20view%20transparent%20sealed&image_size=square'
    ],
    details: {
      material: 'PET塑料',
      color: '透明',
      certification: 'FDA',
      application: '食品包装容器'
    }
  }
];

// 获取产品详情
onMounted(() => {
  const productId = parseInt(route.params.id);
  product.value = productsData.find(p => p.id === productId);
});

// 切换图片
const changeImage = (index) => {
  currentImageIndex.value = index;
};

// 返回产品列表
const goBack = () => {
  router.push('/products');
};
</script>

<template>
  <div class="product-detail">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="container">
        <div class="logo" @click="router.push('/')">渝隆注塑</div>
        <div class="nav-links">
          <button @click="router.push('/')" class="nav-link">首页</button>
          <button @click="router.push('/products')" class="nav-link">产品展示</button>
        </div>
      </div>
    </nav>

    <!-- 产品详情页面 -->
    <section class="section product-detail-section" v-if="product">
      <div class="container">
        <button class="back-button" @click="goBack">← 返回产品列表</button>
        
        <h1 class="product-title">{{ product.name }}</h1>
        <p class="product-category">{{ product.category }}</p>
        <p class="product-description">{{ product.description }}</p>
        
        <!-- 产品图片展示 -->
        <div class="product-images">
          <!-- 主图片 -->
          <div class="main-image">
            <img :src="product.images[currentImageIndex]" :alt="product.name">
          </div>
          
          <!-- 缩略图 -->
          <div class="thumbnail-images">
            <div 
              v-for="(image, index) in product.images" 
              :key="index" 
              class="thumbnail-item" 
              :class="{ active: index === currentImageIndex }"
              @click="changeImage(index)"
            >
              <img :src="image" :alt="`${product.name} 角度 ${index + 1}`">
            </div>
          </div>
        </div>
        
        <!-- 产品详情 -->
        <div class="product-details">
          <h2 class="details-title">产品详情</h2>
          <div class="details-grid">
            <div class="detail-item">
              <span class="detail-label">材料</span>
              <span class="detail-value">{{ product.details.material }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">颜色</span>
              <span class="detail-value">{{ product.details.color }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">认证</span>
              <span class="detail-value">{{ product.details.certification || product.details.precision }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">应用</span>
              <span class="detail-value">{{ product.details.application }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">渝隆注塑</div>
          <div class="footer-links">
            <button @click="router.push('/')" class="footer-link">首页</button>
            <button @click="router.push('/products')" class="footer-link">产品展示</button>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} 渝隆注塑</p>
        </div>
      </div>
    </footer>
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
  letter-spacing: 0.5px;
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
  letter-spacing: 0.5px;
  transition: color 0.3s;
  position: relative;
}

.nav-link:hover {
  color: #000000;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #000000;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

/* 产品详情页面 */
.product-detail-section {
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

.product-title {
  font-size: 32px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}

.product-category {
  font-size: 12px;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.product-description {
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 60px;
  max-width: 800px;
}

/* 产品图片展示 */
.product-images {
  margin-bottom: 80px;
}

.main-image {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  margin-bottom: 20px;
}

.main-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.main-image:hover img {
  transform: scale(1.05);
}

.thumbnail-images {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 10px;
}

.thumbnail-item {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.thumbnail-item.active {
  border-color: #000000;
}

.thumbnail-item:hover {
  border-color: #000000;
  transform: translateY(-3px);
}

.thumbnail-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 产品详情 */
.product-details {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 8px;
}

.details-title {
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  margin-bottom: 30px;
  letter-spacing: -0.5px;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-label {
  font-size: 12px;
  color: #999999;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.detail-value {
  font-size: 16px;
  color: #333333;
  font-weight: 400;
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
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 40px;
}

.footer-logo {
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  letter-spacing: 0.5px;
}

.footer-links {
  display: flex;
  gap: 30px;
}

.footer-link {
  background: none;
  border: none;
  font-size: 12px;
  color: #999999;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #000000;
}

.footer-bottom {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid #f0f0f0;
}

.footer-bottom p {
  font-size: 12px;
  color: #999999;
  letter-spacing: 0.5px;
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
  
  .product-detail-section {
    padding: 80px 0;
  }
  
  .product-title {
    font-size: 24px;
  }
  
  .product-description {
    font-size: 14px;
    margin-bottom: 40px;
  }
  
  .main-image {
    aspect-ratio: 1;
  }
  
  .thumbnail-item {
    width: 80px;
    height: 80px;
  }
  
  .product-details {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 30px;
  }
  
  .details-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .detail-item {
    padding: 20px;
  }
  
  .detail-label {
    font-size: 12px;
  }
  
  .detail-value {
    font-size: 14px;
  }
}

/* 小屏幕手机优化 */
@media (max-width: 480px) {
  .nav-links {
    gap: 16px;
  }
  
  .product-detail-section {
    padding: 60px 0;
  }
  
  .product-title {
    font-size: 20px;
  }
  
  .product-description {
    font-size: 14px;
    margin-bottom: 30px;
  }
  
  .main-image {
    aspect-ratio: 1;
  }
  
  .thumbnail-item {
    width: 60px;
    height: 60px;
  }
  
  .product-details {
    gap: 20px;
    padding: 20px;
  }
  
  .detail-item {
    padding: 16px;
  }
  
  .details-grid {
    gap: 16px;
  }
}

/* 触摸设备优化 */
@media (hover: none) and (pointer: coarse) {
  .thumbnail-item {
    cursor: default;
  }
  
  .back-button {
    padding: 10px 0;
  }
}

/* 页脚响应式 */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 30px;
    text-align: center;
    padding: 0 20px;
  }
  
  .footer-links {
    justify-content: center;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .footer-content {
    gap: 20px;
  }
  
  .footer-links {
    gap: 16px;
  }
}
</style>
