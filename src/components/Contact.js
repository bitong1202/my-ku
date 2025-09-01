import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    alert('感谢您的留言！我们会尽快回复您。');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: '地址',
      content: '广东省广州市番禺区大学城外环东路280号',
      subtitle: '广东药科大学主校区'
    },
    {
      icon: <FaPhone />,
      title: '电话',
      content: '020-12345678',
      subtitle: '工作日 8:00-18:00'
    },
    {
      icon: <FaEnvelope />,
      title: '邮箱',
      content: 'info@gdpust.edu.cn',
      subtitle: '24小时内回复'
    },
    {
      icon: <FaClock />,
      title: '办公时间',
      content: '周一至周五',
      subtitle: '8:00-18:00'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">联系我们</h2>
        <p className="contact-intro">如果您有任何问题或建议，请随时联系我们</p>
        <div className="contact-content">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h4>{info.title}</h4>
                  <p className="contact-main">{info.content}</p>
                  <p className="contact-sub">{info.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-main-content">
            <div className="contact-form-section">
              <h3>给我们留言</h3>
              <p>我们会尽快与您联系，通常在一个工作日内回复</p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">姓名 *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">邮箱 *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">主题 *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">留言内容 *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn">发送留言</button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
