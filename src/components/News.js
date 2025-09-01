import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa';
import './News.css';

const News = () => {
  const [activeTab, setActiveTab] = useState('all');
  const navigate = useNavigate();

  const news = [
    {
      id: 1,
      title: '广东药科大学举办2024年春季开学典礼',
      excerpt: '3月1日，广东药科大学在体育馆隆重举行2024年春季开学典礼，校领导、各学院负责人及全体新生参加...',
      date: '2024-03-01',
      author: '宣传部',
      category: 'news',
      image: '/photos/xishuihu.jpg'
    },
    {
      id: 2,
      title: '我校获批多项国家级科研项目',
      excerpt: '近日，国家自然科学基金委员会公布了2024年度项目评审结果，我校共有15个项目获得资助...',
      date: '2024-02-28',
      author: '科研处',
      category: 'research',
      image: '/photos/26f367e89ea76a6a6eed82c0fd3f9a8.jpg'
    },
    {
      id: 3,
      title: '2024年本科招生简章发布',
      excerpt: '广东药科大学2024年本科招生简章正式发布，计划招收本科生5000人，涵盖药学、医学、工学等专业...',
      date: '2024-02-25',
      author: '招生办',
      category: 'admission',
      image: '/photos/xishuihu.jpg'
    },
    {
      id: 4,
      title: '国际学术交流周活动圆满结束',
      excerpt: '为期一周的国际学术交流周活动圆满结束，来自美国、英国、日本等国家的专家学者进行了深入交流...',
      date: '2024-02-20',
      author: '国际交流处',
      category: 'international',
      image: '/photos/26f367e89ea76a6a6eed82c0fd3f9a8.jpg'
    },
    {
      id: 5,
      title: '学生在全国药学技能大赛中获佳绩',
      excerpt: '在刚刚结束的全国药学技能大赛中，我校学生表现优异，获得团体一等奖和个人多项奖项...',
      date: '2024-02-15',
      author: '教务处',
      category: 'student',
      image: '/photos/xishuihu.jpg'
    },
    {
      id: 6,
      title: '校园基础设施建设取得新进展',
      excerpt: '学校新建实验楼项目正式开工，预计明年投入使用，将大大改善教学科研条件...',
      date: '2024-02-10',
      author: '基建处',
      category: 'campus',
      image: '/photos/26f367e89ea76a6a6eed82c0fd3f9a8.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'news', name: '学校新闻' },
    { id: 'research', name: '科研动态' },
    { id: 'admission', name: '招生信息' },
    { id: 'student', name: '学生活动' },
    { id: 'international', name: '国际交流' }
  ];

  const filteredNews = activeTab === 'all' 
    ? news 
    : news.filter(item => item.category === activeTab);

  return (
    <section id="news" className="section news-section">
      <div className="container">
        <h2 className="section-title">新闻动态</h2>
        
        <div className="news-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`news-tab ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="news-grid">
          {filteredNews.map(item => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="news-category">
                  {categories.find(cat => cat.id === item.category)?.name}
                </div>
              </div>
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <div className="news-meta">
                  <span className="news-date">
                    <FaCalendar /> {item.date}
                  </span>
                  <span className="news-author">
                    <FaUser /> {item.author}
                  </span>
                </div>
                <button 
                  className="news-read-more"
                  onClick={() => {
                    // 立即滚动到顶部，然后跳转
                    window.scrollTo(0, 0);
                    setTimeout(() => {
                      navigate(`/news/${item.id}`);
                    }, 0);
                  }}
                >
                  阅读更多 <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
