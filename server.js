const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// 配置CORS
app.use(cors());
app.use(express.json());

// 预留MongoDB连接
const MONGODB_URI = 'mongodb://localhost:27017/yulong';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.log('MongoDB connection error:', err);
  // 使用模拟数据
  console.log('Using mock data instead');
});

// 模拟数据
const mockSamples = [
  {
    id: 1,
    name: '塑料外壳',
    description: '高精度注塑塑料外壳，适用于电子设备',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20injection%20molded%20electronic%20device%20housing%20white%20color%20high%20precision&image_size=square'
  },
  {
    id: 2,
    name: '汽车零部件',
    description: '耐用的汽车塑料零部件，符合行业标准',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=automotive%20plastic%20parts%20engine%20component%20black%20color&image_size=square'
  },
  {
    id: 3,
    name: '医疗设备配件',
    description: '医疗级塑料配件，安全卫生',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20device%20plastic%20parts%20white%20color%20sterile&image_size=square'
  },
  {
    id: 4,
    name: '日常用品',
    description: '高品质日常塑料用品，美观实用',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plastic%20household%20items%20colorful%20modern%20design&image_size=square'
  }
];

// API路由
app.get('/api/samples', (req, res) => {
  res.json(mockSamples);
});

app.get('/api/contact', (req, res) => {
  res.json({
    address: '重庆市渝北区工业园区',
    phone: '023-12345678',
    email: 'info@yulong.com',
    workingHours: '周一至周五 8:00-18:00'
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
