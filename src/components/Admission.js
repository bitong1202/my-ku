import React, { useState } from 'react';
import { FaGraduationCap, FaCalendar, FaUsers, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Admission.css';

const Admission = () => {
  const [activeTab, setActiveTab] = useState('undergraduate');

  const admissionInfo = {
    undergraduate: {
      title: '本科招生',
      description: '面向全国招收优秀高中毕业生，培养高素质医药人才',
      programs: [
        { name: '药学', students: 200, duration: '4年' },
        { name: '临床医学', students: 150, duration: '5年' },
        { name: '药物制剂', students: 120, duration: '4年' },
        { name: '生物工程', students: 100, duration: '4年' },
        { name: '工商管理', students: 80, duration: '4年' }
      ],
      requirements: [
        '参加全国普通高等学校招生统一考试',
        '身体健康，符合专业体检要求',
        '高考成绩达到我校录取分数线',
        '英语成绩良好，具备一定的英语听说读写能力'
      ],
      timeline: [
        { month: '6月', event: '高考' },
        { month: '7月', event: '志愿填报' },
        { month: '8月', event: '录取通知' },
        { month: '9月', event: '新生报到' }
      ]
    },
    graduate: {
      title: '研究生招生',
      description: '招收硕士研究生和博士研究生，培养高层次医药科研人才',
      programs: [
        { name: '药学硕士', students: 50, duration: '3年' },
        { name: '医学硕士', students: 40, duration: '3年' },
        { name: '药学博士', students: 20, duration: '4年' },
        { name: '医学博士', students: 15, duration: '4年' }
      ],
      requirements: [
        '具有本科学历或同等学力',
        '通过全国硕士研究生统一招生考试',
        '英语水平达到要求（CET-6或同等水平）',
        '具备良好的科研能力和创新精神'
      ],
      timeline: [
        { month: '10月', event: '网上报名' },
        { month: '12月', event: '初试' },
        { month: '3月', event: '复试' },
        { month: '4月', event: '录取通知' }
      ]
    }
  };

  const currentInfo = admissionInfo[activeTab];

  return (
    <section id="admission" className="section admission-section">
      <div className="content-wrapper">
        <h2 className="section-title">招生信息</h2>
        
        <div className="admission-tabs">
          <button
            className={`admission-tab ${activeTab === 'undergraduate' ? 'active' : ''}`}
            onClick={() => setActiveTab('undergraduate')}
          >
            <FaGraduationCap /> 本科招生
          </button>
          <button
            className={`admission-tab ${activeTab === 'graduate' ? 'active' : ''}`}
            onClick={() => setActiveTab('graduate')}
          >
            <FaGraduationCap /> 研究生招生
          </button>
        </div>

        <div className="admission-content">
          <div className="admission-header">
            <h3>{currentInfo.title}</h3>
            <p>{currentInfo.description}</p>
          </div>

          <div className="admission-grid">
            <div className="admission-programs">
              <h4>招生专业</h4>
              <div className="programs-list">
                {currentInfo.programs.map((program, index) => (
                  <div key={index} className="program-item">
                    <div className="program-info">
                      <h5>{program.name}</h5>
                      <div className="program-details">
                        <span><FaUsers /> {program.students}人</span>
                        <span><FaCalendar /> {program.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="admission-requirements">
              <h4>报考条件</h4>
              <ul>
                {currentInfo.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div className="admission-timeline">
              <h4>招生时间安排</h4>
              <div className="timeline">
                {currentInfo.timeline.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-month">{item.month}</div>
                    <div className="timeline-event">{item.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="admission-contact">
            <h4>招生咨询</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaPhone />
                <h5>招生热线</h5>
                <p>020-12345678</p>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <h5>招生邮箱</h5>
                <p>admission@gdpust.edu.cn</p>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt />
                <h5>招生办公室</h5>
                <p>广东省广州市番禺区大学城外环东路280号</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
