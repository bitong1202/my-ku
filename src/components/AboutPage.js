import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaHistory, FaGraduationCap, FaUsers, FaTrophy } from 'react-icons/fa';
import './AboutPage.css';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="about-header">
        <div className="about-container">
          <button className="back-btn" onClick={() => navigate('/')}>
            <FaArrowLeft /> 返回首页
          </button>
          <h1>关于我们</h1>
          <p>了解广东药科大学的历史、使命与愿景</p>
        </div>
      </div>

      <div className="about-content">
        <div className="about-container">
          <section className="about-section">
            <div className="section-header">
              <FaHistory className="section-icon" />
              <h2>学校简介</h2>
            </div>
            <div className="section-content">
              <p>
                广东药科大学是一所以药学为特色，医学、理学、工学、管理学、经济学等多学科协调发展的省属重点大学。
                学校前身是创建于1958年的广东省卫生干部进修学院，经过60多年的发展，已成为华南地区重要的医药人才培养基地。
              </p>
              <p>
                学校秉承"明德精药、济世惠民"的校训，坚持"以学生为中心、以质量为核心、以特色为优势"的办学理念，
                致力于培养德智体美劳全面发展的高素质医药人才。
              </p>
            </div>
          </section>

          <section className="about-section">
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h2>办学特色</h2>
            </div>
            <div className="section-content">
              <div className="features-grid">
                <div className="feature-card">
                  <h3>药学优势</h3>
                  <p>拥有完整的药学学科体系，涵盖药物化学、药剂学、药理学、药物分析等专业方向</p>
                </div>
                <div className="feature-card">
                  <h3>产学研结合</h3>
                  <p>与多家医药企业建立合作关系，为学生提供实践机会和就业平台</p>
                </div>
                <div className="feature-card">
                  <h3>国际化办学</h3>
                  <p>与多所国际知名大学开展合作交流，为学生提供海外学习机会</p>
                </div>
                <div className="feature-card">
                  <h3>创新创业</h3>
                  <p>注重学生创新创业能力培养，设立创新创业学院和孵化基地</p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="section-header">
              <FaUsers className="section-icon" />
              <h2>师资力量</h2>
            </div>
            <div className="section-content">
              <div className="stats-grid">
                <div className="stat-item">
                  <h3>1000+</h3>
                  <p>专任教师</p>
                </div>
                <div className="stat-item">
                  <h3>80%</h3>
                  <p>博士学位</p>
                </div>
                <div className="stat-item">
                  <h3>200+</h3>
                  <p>教授副教授</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>海外经历</p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="section-header">
              <FaTrophy className="section-icon" />
              <h2>发展成就</h2>
            </div>
            <div className="section-content">
              <div className="achievements">
                <div className="achievement-item">
                  <h4>学科建设</h4>
                  <p>药学学科进入ESI全球前1%，多个专业获批国家级一流本科专业建设点</p>
                </div>
                <div className="achievement-item">
                  <h4>科研成果</h4>
                  <p>承担国家自然科学基金、国家重点研发计划等重大项目，发表高水平论文数千篇</p>
                </div>
                <div className="achievement-item">
                  <h4>人才培养</h4>
                  <p>毕业生就业率保持在95%以上，深受用人单位好评</p>
                </div>
                <div className="achievement-item">
                  <h4>社会服务</h4>
                  <p>积极参与健康中国建设，为地方经济社会发展做出重要贡献</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
