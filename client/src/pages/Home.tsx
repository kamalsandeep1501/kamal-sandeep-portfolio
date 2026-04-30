import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      id: 1,
      title: "RAG Agent with PDF Upload & Web Search",
      category: "Generative AI",
      description:
        "An AI-powered chatbot that answers questions using both uploaded PDFs and real-time web data with intelligent source routing.",
      challenge:
        "Overcoming LLM knowledge cutoffs and providing context-aware answers from user documents and external sources.",
      approach:
        "Integrated LangChain for orchestration, ChromaDB for vector storage, and Tavily API for real-time web search. Implemented intelligent source routing.",
      results: "Delivered a tool with 100% source-attributed answers, significantly reducing hallucinations in document-based queries.",
      tech: ["LangChain", "ChromaDB", "Groq", "Tavily API", "HuggingFace"],
      date: "04/2026",
    },
    {
      id: 2,
      title: "Real-time Face Mask Detection System",
      category: "Computer Vision",
      description:
        "A high-accuracy face mask detection model capable of processing video streams in real-time.",
      challenge:
        "Developing a computer vision model that achieves high precision across various lighting conditions and real-time performance.",
      approach:
        "Leveraged YOLOv8 for object detection and optimized the pipeline for efficient webcam stream processing using Python.",
      results: "Achieved high-precision detection across various lighting conditions, demonstrating production-ready computer vision capabilities.",
      tech: ["YOLOv8", "OpenCV", "Python", "Computer Vision"],
      date: "02/2026",
    },
    {
      id: 3,
      title: "Data-Driven Decision Support (AmasQIS.ai)",
      category: "Professional Experience",
      description:
        "Improved model performance and data processing efficiency within a professional AI environment.",
      challenge:
        "Applying advanced analytical techniques to large datasets and collaborating on AI model refinement.",
      approach:
        "Applied statistical analysis and optimization techniques to process datasets and support model refinement.",
      results: "Contributed to improved model accuracy and streamlined data pipelines, proving ability to work in professional AI teams.",
      tech: ["Python", "Data Analysis", "Statistics", "Optimization"],
      date: "08/2025 - 03/2026",
    },
  ];

  const skills = [
    {
      category: "Generative AI",
      items: ["RAG", "LangChain", "LangGraph", "LLM APIs", "ChromaDB", "Prompt Engineering"],
    },
    {
      category: "Computer Vision",
      items: ["YOLOv8", "OpenCV", "Real-time Processing", "Object Detection"],
    },
    {
      category: "Data Engineering",
      items: ["Python", "MySQL", "Power BI", "Data Analysis", "Statistics"],
    },
    {
      category: "Core Engineering",
      items: ["Java (DSA)", "Git & GitHub", "REST APIs", "Cloud Infrastructure"],
    },
  ];

  const certifications = [
    "AWS Certified AI Practitioner",
    "Oracle Cloud Infrastructure Foundations",
    "Associate Data Analyst",
    "Deloitte Data Analytics Job Simulation",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            •
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#projects" className="text-slate-300 hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white transition">
              Skills
            </a>
            <a href="#about" className="text-slate-300 hover:text-white transition">
              About
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition">
              Contact
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/kamalsandeep15072004"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-800 rounded-lg transition"
            >
              <Github size={20} className="text-slate-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/kamal-sandeep-a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-slate-800 rounded-lg transition"
            >
              <Linkedin size={20} className="text-slate-300" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
              <span className="text-sm text-blue-300">AI Engineer • Building Intelligent Systems</span>
            </div>



            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              I'm an enthusiastic AI Engineer specializing in Generative AI, Computer Vision, and Data-Driven Solutions. 
              I build production-ready AI applications that solve real-world problems using cutting-edge technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="inline-flex">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base">
                  Explore My Work <ArrowRight className="ml-2" size={20} />
                </Button>
              </a>
              <a href="#contact" className="inline-flex">
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-base">
                  Get in Touch
                </Button>
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-slate-800">
              <div>
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <p className="text-slate-400 text-sm mt-2">AI Projects</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">4</div>
                <p className="text-slate-400 text-sm mt-2">Certifications</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">8.2</div>
                <p className="text-slate-400 text-sm mt-2">CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400 text-lg">
              A selection of my most impactful work demonstrating expertise in AI, ML, and real-time systems.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 md:p-10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className="inline-block mb-4 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
                      <span className="text-xs text-blue-300 font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400">{project.description}</p>
                  </div>
                  <div className="text-sm text-slate-500 mt-4 md:mt-0 md:text-right">{project.date}</div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Challenge</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Approach</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.approach}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">Results</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{project.results}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-slate-400 text-lg">
              A comprehensive toolkit spanning Generative AI, Computer Vision, Data Engineering, and Software Development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300 font-medium hover:border-blue-500/60 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Professional Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                <p>
                  I'm an enthusiastic AI Engineer currently pursuing a B.E. in Artificial Intelligence and Machine Learning 
                  at Rathinam Technical Campus. With hands-on experience in building AI applications, I'm passionate about 
                  creating intelligent systems that solve real-world problems.
                </p>
                <p>
                  My journey in AI has been driven by a desire to understand how machines can learn and adapt. From developing 
                  RAG systems to building computer vision models, I've consistently pushed the boundaries of what's possible 
                  with modern AI technologies.
                </p>
                <p>
                  I'm seeking an entry-level role where I can apply my AI and development skills while continuously learning 
                  and growing in the field of Artificial Intelligence. I'm particularly interested in Generative AI, MLOps, 
                  and building production-ready AI systems.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-8">Quick Facts</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-slate-400 mb-2">Location</p>
                  <p className="text-lg text-white font-medium">Coimbatore, India</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Education</p>
                  <p className="text-lg text-white font-medium">B.E. AI & Machine Learning</p>
                  <p className="text-sm text-slate-400">Rathinam Technical Campus (2023-Present)</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Recent Experience</p>
                  <p className="text-lg text-white font-medium">AI Intern at AmasQIS.ai</p>
                  <p className="text-sm text-slate-400">Aug 2025 - Mar 2026</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Interests</p>
                  <p className="text-lg text-white font-medium">Generative AI, MLOps, Computer Vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
            <p className="text-slate-400 text-lg mb-12">
              I'm always interested in hearing about new opportunities and collaborations. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="mailto:kamalsandeep15072004@gmail.com" className="inline-flex">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base">
                  <Mail className="mr-2" size={20} /> Email Me
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/kamal-sandeep-a/" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-base">
                  <Linkedin className="mr-2" size={20} /> LinkedIn
                </Button>
              </a>
              <a href="https://github.com/kamalsandeep15072004" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 text-base">
                  <Github className="mr-2" size={20} /> GitHub
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-slate-400">
              <a href="tel:9345863173" className="hover:text-white transition">
                📞 9345863173
              </a>
              <a href="mailto:kamalsandeep15072004@gmail.com" className="hover:text-white transition">
                📧 kamalsandeep15072004@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400 text-sm">
          <p>© 2026 Kamal Sandeep A. All rights reserved.</p>
          <p className="mt-2">Designed and built with React, Tailwind CSS, and a passion for AI.</p>
        </div>
      </footer>
    </div>
  );
}
