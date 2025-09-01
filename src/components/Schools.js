import React from 'react';
import { FaFlask, FaHeartbeat, FaCogs, FaChartLine, FaMicroscope } from 'react-icons/fa';
import './Schools.css';

const Schools = () => {
  const schools = [
    {
      icon: <FaFlask />,
      name: '药学院',
      description: '培养药学专业人才，涵盖药物化学、药剂学、药理学等方向',
      programs: ['药学', '药物制剂', '临床药学'],
      color: '#1e3c72'
    },
    {
      icon: <FaHeartbeat />,
      name: '医学院',
      description: '培养医学专业人才，注重临床实践和医学研究',
      programs: ['临床医学', '预防医学', '医学检验技术'],
      color: '#2a5298'
    },
    {
      icon: <FaCogs />,
      name: '工学院',
      description: '培养工程技术人才，涵盖生物工程、制药工程等领域',
      programs: ['生物工程', '制药工程', '生物制药'],
      color: '#3a6ea5'
    },
    {
      icon: <FaChartLine />,
      name: '管理学院',
      description: '培养管理专业人才，注重医药行业管理特色',
      programs: ['工商管理', '市场营销', '公共事业管理'],
      color: '#4a7bb2'
    },
    {
      icon: <FaMicroscope />,
      name: '理学院',
      description: '培养理学专业人才，为医药学科提供基础理论支撑',
      programs: ['应用化学', '生物技术', '信息管理与信息系统'],
      color: '#5a88bf'
    }
  ];

  return (
    <section id="schools" className="section schools-section">
      <div className="container">
        <h2 className="section-title">学院设置</h2>
        <p className="section-subtitle">多学科协调发展，培养复合型医药人才</p>
        
        <div className="schools-grid">
          {schools.map((school, index) => (
            <div key={index} className="school-card">
              <div className="school-icon" style={{ color: school.color }}>
                {school.icon}
              </div>
              <h3 className="school-name">{school.name}</h3>
              <p className="school-description">{school.description}</p>
              <div className="school-programs">
                <h4>主要专业：</h4>
                <ul>
                  {school.programs.map((program, idx) => (
                    <li key={idx}>{program}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="schools-stats schools-stats-container" 
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1000px',
            margin: '80px auto 0',
            padding: '0 20px'
          }}
        >
          <div 
            className="stat-item schools-stat-item" 
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '0',
              minWidth: '0'
            }}
          >
            <div className="stat-number">50+</div>
            <div className="stat-label">学院数量</div>
          </div>
          <div 
            className="stat-item schools-stat-item" 
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '0',
              minWidth: '0'
            }}
          >
            <div className="stat-number">300+</div>
            <div className="stat-label">专业设置</div>
          </div>
          <div 
            className="stat-item schools-stat-item" 
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '0',
              minWidth: '0'
            }}
          >
            <div className="stat-number">1000+</div>
            <div className="stat-label">专任教师</div>
          </div>
          <div 
            className="stat-item schools-stat-item" 
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '0',
              minWidth: '0'
            }}
          >
            <div className="stat-number">30,000+</div>
            <div className="stat-label">在校学生</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schools;
