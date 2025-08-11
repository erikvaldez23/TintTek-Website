import { useState, useEffect } from "react";

const ChatbotPopup = ({ onClose, onOpenChatbot }) => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setOpen(true);
      setTimeout(() => setAnimate(true), 100);
    }, 800);

    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(autoCloseTimer);
    };
  }, []);

  const handleClose = () => {
    setAnimate(false);
    setOpen(false);
    setTimeout(onClose, 300);
  };

  if (!open) return null;

  return (
    <div className={`chatbot-popup ${animate ? 'animate-in' : ''}`}>
      {/* Floating gradient orbs for background effect */}
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="gradient-orb gradient-orb-2"></div>
      <div className="gradient-orb gradient-orb-3"></div>
      
      {/* Main popup content */}
      <div className="popup-content">
        {/* Close button */}
        <button onClick={handleClose} className="close-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Avatar with animated ring */}
        <div className="avatar-container">
          <div className="avatar-ring"></div>
          <div className="avatar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="content">
          <h3 className="title">Hi there! 👋</h3>
          <p className="message">
            Need help with anything? I'm your AI assistant, ready to help with questions, 
            projects, or just have a friendly chat!
          </p>
          
          <button onClick={onOpenChatbot} className="cta-button">
            <span>Start chatting</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .chatbot-popup {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 340px;
          max-width: 90vw;
          z-index: 2000;
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .chatbot-popup.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }

        .popup-content {
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(32px) saturate(180%);
          border-radius: 28px;
          padding: 36px 32px;
          box-shadow: 
            0 32px 64px rgba(39, 148, 210, 0.15),
            0 16px 48px rgba(39, 148, 210, 0.1),
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.15),
            inset 0 -1px 0 rgba(39, 148, 210, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        .popup-content::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, 
            rgba(39, 148, 210, 0.03) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(39, 148, 210, 0.02) 100%);
          pointer-events: none;
        }

        .close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: #000;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 1);
          transform: scale(1.05);
          box-shadow: 0 4px 16px rgba(39, 148, 210, 0.2);
        }

        .avatar-container {
          position: relative;
          width: 64px;
          height: 64px;
          margin: 0 auto 24px;
        }

        .avatar-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2794d2, #42a5f5, #2794d2, #1976c4);
          animation: rotate 4s linear infinite;
          opacity: 0.8;
        }

        .avatar {
          position: relative;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #2794d2 0%, #1976c4 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 12px 40px rgba(39, 148, 210, 0.4);
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .content {
          text-align: center;
        }

        .title {
          font-size: 26px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.95);
          margin: 0 0 16px 0;
          text-shadow: 0 2px 8px rgba(39, 148, 210, 0.3);
          background: linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .message {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          margin: 0 0 32px 0;
          font-weight: 400;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        }

        .cta-button {
          width: 100%;
          background: linear-gradient(135deg, #2794d2 0%, #1976c4 50%, #2794d2 100%);
          color: white;
          border: none;
          border-radius: 18px;
          padding: 18px 28px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 
            0 12px 32px rgba(39, 148, 210, 0.4),
            0 4px 16px rgba(39, 148, 210, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 
            0 20px 48px rgba(39, 148, 210, 0.5),
            0 8px 24px rgba(39, 148, 210, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
          background: linear-gradient(135deg, #42a5f5 0%, #2794d2 50%, #1976c4 100%);
          cursor: pointer;
        }

        .cta-button:active {
          transform: translateY(-1px);
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        @media (max-width: 480px) {
          .chatbot-popup {
            width: 90%;
            right: 5%;
            bottom: 70px;
          }
          
          .popup-content {
            padding: 24px 20px;
          }
          
          .title {
            font-size: 22px;
          }
          
          .message {
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  );
};

export default ChatbotPopup;