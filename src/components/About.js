import React from 'react';
import { FaGraduationCap, FaUsers, FaTrophy, FaGlobe } from 'react-icons/fa';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <FaGraduationCap />,
      number: '50+',
      label: '专业设置',
      description: '涵盖药学、医学、工学、理学、管理学等学科门类'
    },
    {
      icon: <FaUsers />,
      number: '30,000+',
      label: '在校学生',
      description: '全日制本科生、研究生和留学生'
    },
    {
      icon: <FaTrophy />,
      number: '100+',
      label: '科研成果',
      description: '国家级、省部级科研项目和成果'
    },
    {
      icon: <FaGlobe />,
      number: '20+',
      label: '国际合作',
      description: '与海外知名高校和科研机构建立合作关系'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="content-wrapper">
        <h2 className="section-title">关于我们</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>广东药科大学简介</h3>
            <p>
              广东药科大学是一所以药学为特色，医学、工学、理学、管理学等多学科协调发展的省属重点大学。
              学校始建于1958年，前身为广东省卫生干部进修学院，经过60多年的发展，已成为华南地区重要的医药人才培养基地。
            </p>
            <p>
              学校秉承"厚德博学、精诚济世"的校训，坚持"以学生为中心、以质量为核心、以创新为动力"的办学理念，
              致力于培养德智体美劳全面发展的高素质医药人才，为健康中国建设贡献力量。
            </p>
            
            <div className="about-features">
              <div className="feature">
                <h4>办学特色</h4>
                <p>以药学为龙头，医学为基础，多学科协调发展</p>
              </div>
              <div className="feature">
                <h4>人才培养</h4>
                <p>注重理论与实践相结合，培养应用型创新人才</p>
              </div>
              <div className="feature">
                <h4>科研实力</h4>
                <p>拥有多个国家级、省部级重点实验室和研究中心</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src="/photos/xishuihu.jpg" alt="广东药科大学校园风光" />
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
