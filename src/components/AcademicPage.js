import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGraduationCap, FaFlask, FaUsers, FaBook } from 'react-icons/fa';
import Header from './Header';
import './AcademicPage.css';

const AcademicPage = () => {
  const navigate = useNavigate();
  const colleges = [
    { name: '药学院', description: '培养药学专业人才，开展药物研发', students: 1200, image: '💊' },
    { name: '医学院', description: '培养临床医学人才，服务医疗卫生', students: 1500, image: '🏥' },
    { name: '生物工程学院', description: '培养生物工程专业人才', students: 800, image: '🧬' },
    { name: '管理学院', description: '培养管理类专业人才', students: 600, image: '📊' }
  ];

  const programs = [
    { name: '药学', level: '本科', duration: '4年', description: '培养具备药学基本理论和技能的专业人才' },
    { name: '临床医学', level: '本科', duration: '5年', description: '培养具备临床医学基本理论和技能的专业人才' },
    { name: '药物制剂', level: '本科', duration: '4年', description: '培养药物制剂研发和生产专业人才' },
    { name: '生物工程', level: '本科', duration: '4年', description: '培养生物工程领域专业人才' },
    { name: '工商管理', level: '本科', duration: '4年', description: '培养管理类专业人才' },
    { name: '药学硕士', level: '研究生', duration: '3年', description: '培养高层次药学专业人才' }
  ];

  const researchAreas = [
    { name: '药物化学', description: '新药设计与合成', projects: 15, image: '🧪' },
    { name: '药理学', description: '药物作用机制研究', projects: 12, image: '🔬' },
    { name: '药剂学', description: '药物制剂技术研究', projects: 10, image: '💊' },
    { name: '临床药学', description: '临床用药研究', projects: 8, image: '🏥' }
  ];

  const achievements = [
    { year: '2023', achievement: '获得国家自然科学基金项目20项' },
    { year: '2023', achievement: '发表SCI论文150篇' },
    { year: '2022', achievement: '获得省部级科技奖励5项' },
    { year: '2022', achievement: '申请发明专利30项' }
  ];

  return (
    <div className="academic-page">
      <Header />
      <div className="academic-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          <FaArrowLeft /> 返回首页
        </button>
        <h1>学术科研</h1>
      </div>

      <div className="academic-content">
        <section className="academic-section">
          <h2><FaGraduationCap /> 学院设置</h2>
          <div className="colleges-grid">
            {colleges.map((college, index) => (
              <div key={index} className="college-card">
                <div className="college-image">{college.image}</div>
                <h3>{college.name}</h3>
                <p>{college.description}</p>
                <div className="college-stats">
                  <span>在校学生: {college.students}人</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="academic-section">
          <h2><FaBook /> 专业介绍</h2>
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-header">
                  <h3>{program.name}</h3>
                  <div className="program-badge">{program.level}</div>
                </div>
                <p className="program-duration">学制: {program.duration}</p>
                <p className="program-description">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="academic-section">
          <h2><FaUsers /> 人才培养</h2>
          <div className="talent-cultivation">
            <div className="cultivation-item">
              <h3>本科教育</h3>
              <p>注重理论与实践相结合，培养具有创新精神和实践能力的高素质人才。</p>
              <ul>
                <li>专业课程体系完善</li>
                <li>实践教学环节丰富</li>
                <li>创新创业教育</li>
              </ul>
            </div>
            <div className="cultivation-item">
              <h3>研究生教育</h3>
              <p>培养具有扎实理论基础和创新能力的高层次专门人才。</p>
              <ul>
                <li>导师制培养模式</li>
                <li>科研能力训练</li>
                <li>学术交流平台</li>
              </ul>
            </div>
            <div className="cultivation-item">
              <h3>国际交流</h3>
              <p>积极开展国际交流与合作，提升人才培养的国际化水平。</p>
              <ul>
                <li>海外访学项目</li>
                <li>国际学术会议</li>
                <li>合作办学项目</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="academic-section">
          <h2><FaFlask /> 科学研究</h2>
          <div className="research-areas">
            <div className="research-grid">
              {researchAreas.map((area, index) => (
                <div key={index} className="research-card">
                  <div className="research-icon">{area.image}</div>
                  <h3>{area.name}</h3>
                  <p>{area.description}</p>
                  <div className="research-projects">
                    在研项目: {area.projects}项
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="achievements-section">
            <h3>科研成果</h3>
            <div className="achievements-list">
              {achievements.map((item, index) => (
                <div key={index} className="achievement-item">
                  <span className="achievement-year">{item.year}</span>
                  <span className="achievement-text">{item.achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcademicPage;
