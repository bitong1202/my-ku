import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCalendar, FaUser, FaTag } from 'react-icons/fa';
import './NewsDetailPage.css';

const NewsDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 页面加载时立即滚动到顶部
  React.useEffect(() => {
    // 立即滚动到顶部，不使用平滑滚动
    window.scrollTo(0, 0);
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE
  }, [id]);

  // 完整的新闻数据
  const newsData = {
    1: {
      title: '广东药科大学举办2024年春季开学典礼',
      date: '2024-03-01',
      author: '宣传部',
      category: '学校新闻',
      image: '/photos/xishuihu.jpg',
      content: `
        <p>3月1日上午，广东药科大学2024年春季开学典礼在大学城校区体育馆隆重举行。校党委书记刘晟、校长郭姣等全体校领导，各学院院长、党委书记，以及2024级全体新生参加了典礼。</p>
        
        <h3>校长致辞</h3>
        <p>校长郭姣在致辞中表示，新的学期承载着新的希望与梦想。她鼓励同学们要树立远大理想，勤奋学习，勇于创新，为成为德智体美劳全面发展的社会主义建设者和接班人而努力奋斗。</p>
        
        <h3>学生代表发言</h3>
        <p>药学院2024级学生代表李明同学在发言中表示，将珍惜大学时光，努力学习专业知识，积极参与科研实践，为学校争光，为祖国的医药事业贡献青春力量。</p>
        
        <h3>颁奖环节</h3>
        <p>典礼上还对上学期表现优秀的学生进行了表彰，共有200名学生获得各类奖学金，50名学生被评为"三好学生"，30名学生被评为"优秀学生干部"。</p>
        
        <p>此次开学典礼的成功举办，标志着新学期的正式开始，为全校师生注入了新的活力和动力。</p>
      `
    },
    2: {
      title: '我校获批多项国家级科研项目',
      date: '2024-02-28',
      author: '科研处',
      category: '科研动态',
      image: '/photos/26f367e89ea76a6a6eed82c0fd3f9a8.jpg',
      content: `
        <p>近日，国家自然科学基金委员会公布了2024年度项目评审结果，我校在本次申报中取得优异成绩，共获批15个项目，获得资助经费总额达1200万元。</p>
        
        <h3>项目分布情况</h3>
        <p>本次获批项目涵盖了药学、医学、生物工程等多个学科领域：</p>
        <ul>
          <li>药学相关项目8项，资助经费650万元</li>
          <li>医学相关项目4项，资助经费320万元</li>
          <li>生物工程项目2项，资助经费150万元</li>
          <li>其他学科项目1项，资助经费80万元</li>
        </ul>
        
        <h3>重点项目介绍</h3>
        <p>其中，药学院张教授主持的"新型抗肿瘤药物分子设计与合成研究"项目获得重点项目资助，资助经费达200万元。该项目将在未来4年内开展创新性研究，有望在抗肿瘤药物领域取得重大突破。</p>
        
        <h3>科研实力提升</h3>
        <p>本次国家自然科学基金项目的成功获批，充分体现了我校在相关领域的科研实力和学术影响力，为学校"双一流"建设提供了有力支撑。</p>
        
        <p>学校将继续加大科研投入，优化科研环境，为广大科研工作者创造更好的条件，推动学校科研事业高质量发展。</p>
      `
    },
    3: {
      title: '2024年本科招生简章发布',
      date: '2024-02-25',
      author: '招生办',
      category: '招生信息',
      image: '/photos/xishuihu.jpg',
      content: `
        <p>广东药科大学2024年本科招生简章正式发布。今年学校计划招收本科生5000人，较去年增加200人，涵盖药学、医学、工学、理学、管理学等5大学科门类。</p>
        
        <h3>招生专业设置</h3>
        <p>2024年招生专业包括：</p>
        <ul>
          <li>药学类专业：药学、药物制剂、临床药学等，计划招生2000人</li>
          <li>医学类专业：临床医学、预防医学、医学检验技术等，计划招生1500人</li>
          <li>工学类专业：生物工程、制药工程、生物制药等，计划招生800人</li>
          <li>理学类专业：应用化学、生物技术等，计划招生400人</li>
          <li>管理学类专业：工商管理、市场营销等，计划招生300人</li>
        </ul>
        
        <h3>录取政策</h3>
        <p>学校继续实行"分数优先，遵循志愿"的录取原则，不设专业级差。对于高考成绩优秀的考生，学校设立了新生奖学金制度，最高可获得10万元奖励。</p>
        
        <h3>特色培养项目</h3>
        <p>今年学校新增"卓越药师培养计划"和"医药创新人才培养项目"，为有志于在医药领域深入发展的学生提供更加优质的教育资源。</p>
        
        <p>详细招生信息请关注学校官方网站和招生办公室发布的相关通知。</p>
      `
    },
    4: {
      title: '国际学术交流周活动圆满结束',
      date: '2024-02-20',
      author: '国际交流处',
      category: '国际交流',
      image: '/photos/26f367e89ea76a6a6eed82c0fd3f9a8.jpg',
      content: `
        <p>为期一周的广东药科大学国际学术交流周活动于2月20日圆满结束。本次活动邀请了来自美国、英国、日本、澳大利亚等10个国家的30余位知名专家学者参与。</p>
        
        <h3>学术报告精彩纷呈</h3>
        <p>交流周期间，国际专家们围绕药物研发、临床医学、生物技术等前沿领域作了20场高水平学术报告，内容涵盖：</p>
        <ul>
          <li>新药研发的最新进展与趋势</li>
          <li>精准医学在临床实践中的应用</li>
          <li>生物制药技术的创新发展</li>
          <li>国际药事法规的比较研究</li>
        </ul>
        
        <h3>合作项目签约</h3>
        <p>活动期间，学校与美国加州大学、英国伦敦大学学院、日本东京大学等5所国际知名高校签署了合作协议，在学生交换、教师互访、科研合作等方面建立了长期合作关系。</p>
        
        <h3>师生收获丰富</h3>
        <p>本次国际学术交流周共有800余名师生参与，大家表示通过与国际专家的深入交流，开阔了学术视野，了解了国际前沿动态，为今后的学习和研究提供了宝贵的启发。</p>
        
        <p>学校将继续加强国际交流合作，为师生创造更多走向世界的机会，推动学校国际化办学水平不断提升。</p>
      `
    },
    5: {
      title: '学生在全国药学技能大赛中获佳绩',
      date: '2024-02-15',
      author: '教务处',
      category: '学生活动',
      image: '/photos/xishuihu.jpg',
      content: `
        <p>在刚刚结束的第八届全国大学生药学技能大赛中，我校代表队表现出色，获得团体一等奖1项、二等奖2项，个人一等奖3项、二等奖5项、三等奖8项的优异成绩。</p>
        
        <h3>比赛概况</h3>
        <p>本次大赛由中国药学会主办，共有来自全国120所高校的360支队伍、1800余名学生参赛。比赛内容包括药物化学、药剂学、药理学、药物分析等多个专业领域的理论知识和实践技能。</p>
        
        <h3>获奖情况</h3>
        <p>我校参赛学生在各个比赛环节中表现优异：</p>
        <ul>
          <li>药学院李同学获得药物化学个人一等奖</li>
          <li>药学院王同学获得药剂学个人一等奖</li>
          <li>医学院张同学获得药理学个人一等奖</li>
          <li>团体赛中，我校代表队以总分第一的成绩获得团体一等奖</li>
        </ul>
        
        <h3>备赛过程</h3>
        <p>为了在比赛中取得好成绩，学校高度重视，成立了专门的指导小组，选派优秀教师进行专业指导。参赛学生在为期3个月的集训中，刻苦训练，不断提升专业技能和实践能力。</p>
        
        <h3>意义与影响</h3>
        <p>本次获奖不仅展现了我校学生扎实的专业基础和优秀的实践能力，也体现了学校在药学人才培养方面的成果，进一步提升了学校在全国药学教育领域的影响力。</p>
        
        <p>学校将以此为契机，继续深化教育教学改革，加强实践教学，培养更多高素质的药学专业人才。</p>
      `
    },
    6: {
      title: '校园基础设施建设取得新进展',
      date: '2024-02-10',
      author: '基建处',
      category: '校园建设',
      image: '/photos/26f367e89ea76a6a6eed82c0fd3f9a8.jpg',
      content: `
        <p>2月10日上午，广东药科大学新建综合实验楼项目正式开工建设。该项目总投资2.5亿元，建筑面积3.2万平方米，预计2025年9月投入使用。</p>
        
        <h3>项目概况</h3>
        <p>新建综合实验楼位于大学城校区核心区域，地上15层，地下2层。项目采用现代化设计理念，融合了绿色建筑、智能化管理等先进技术，将成为学校新的标志性建筑。</p>
        
        <h3>功能布局</h3>
        <p>综合实验楼将设置：</p>
        <ul>
          <li>药物研发实验室20间，配备国际先进设备</li>
          <li>生物安全实验室10间，满足高等级生物实验需求</li>
          <li>学生创新创业孵化中心，面积2000平方米</li>
          <li>国际会议中心，可容纳500人</li>
          <li>图书资料中心，藏书量可达50万册</li>
        </ul>
        
        <h3>建设标准</h3>
        <p>项目严格按照国家绿色建筑三星级标准建设，采用太阳能发电、雨水收集、智能照明等节能环保技术，预计每年可节约能源费用200万元。</p>
        
        <h3>预期效果</h3>
        <p>综合实验楼建成后，将大大改善学校的教学科研条件，为师生提供更加优质的学习和研究环境。预计可同时容纳3000名学生进行实验实践活动，年均承担科研项目200余项。</p>
        
        <p>该项目的开工建设，标志着学校基础设施建设迈上新台阶，为学校"双一流"建设提供了有力保障。</p>
      `
    }
  };

  const currentNews = newsData[id];

  if (!currentNews) {
    return (
      <div className="news-detail-page">
        <div className="news-detail-container">
          <h2>新闻不存在</h2>
          <button onClick={() => navigate('/')} className="back-btn">
            <FaArrowLeft /> 返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="news-detail-page">
      <div className="news-detail-header">
        <div className="news-detail-container">
          <button className="back-btn" onClick={() => navigate('/')}>
            <FaArrowLeft /> 返回首页
          </button>
          
          <div className="news-detail-meta">
            <span className="news-detail-category">
              <FaTag /> {currentNews.category}
            </span>
            <span className="news-detail-date">
              <FaCalendar /> {currentNews.date}
            </span>
            <span className="news-detail-author">
              <FaUser /> {currentNews.author}
            </span>
          </div>
          
          <h1 className="news-detail-title">{currentNews.title}</h1>
        </div>
      </div>

      <div className="news-detail-content">
        <div className="news-detail-container">
          <div className="news-detail-image">
            <img src={currentNews.image} alt={currentNews.title} />
          </div>
          
          <div className="news-detail-body">
            <div 
              className="news-content-text"
              dangerouslySetInnerHTML={{ __html: currentNews.content }}
            />
          </div>


        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
