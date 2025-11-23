/** @jsxImportSource @emotion/react */
import { THEME_BORDER_RADIUS, THEME_COLORS } from '@config/theme';
import { css } from '@emotion/react';
import { Flex, Card, Button } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
import { Typewriter } from 'react-simple-typewriter';

import cursorFingerIcon from '@assets/icons/fi-rs-cursor-finger.svg';
import downloadIcon from '@assets/icons/fi-rs-download.svg';
import meImg from '@assets/me/me.jpeg';

const GLASS_CARD_STYLE = css`
  background: rgba(255, 255, 255, 0.15); 
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  width: 100%;
  z-index: 999;

  border: 1px solid #989898;

  border-radius: 16px;
  box-shadow: none;

  .ant-card-body {
    padding: 0;
    
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .ant-card-head {
      background: transparent;
  }
`;

const styles = {
  container: css`
    height: max-content;
    flex: 1; 
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 30px;

    @media (max-width: 1200px) {
      width: 100%;
      padding: 110px 0 0 0;
      align-items: center;
      height: auto;
      text-align: center;
      flex-direction: column; 
    }
  `,

  profission: css`
    margin: 0;
    font-size: 48px;
    color: transparent;
    -webkit-text-stroke: 1px #ffffff;
    line-height: 1.5;
    overflow: hidden;

    @media (max-width: 1200px) {
      font-size: 3.2rem;
    }
  `,

  title: css`
    margin: 0;
    color: #ffffff;
    font-size: 68px;
    -webkit-text-stroke: 0;
    line-height: 1;
    overflow: hidden;
    letter-spacing: -2px;

    @media (max-width: 1200px) {
      font-size: 1.8rem;
    }
  `,

  description: css`
    margin: 0;
    color: #ffffff;
    font-weight: 600;
    line-height: 2.5;
    font-size: 22px;
  `,

  socialMedia: css`
    display: flex;
    gap: 30px;

    img {
      cursor: pointer;
    }

    @media (max-width: 1200px) {
      justify-content: center;
    }
  `,
  
  rightBlock: css`
    padding: 32px;
    display: flex;
    align-self: center;
    justify-content: center;
  `,
  imageContainer: css`
    height: 330px;
    width: 340px;
    background-color: white !important;
    border-radius: ${THEME_BORDER_RADIUS.GENERAL}px;
    overflow: hidden;
    position: relative;
  `,
  profileImage: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: ${THEME_BORDER_RADIUS.GENERAL}px;
  `,
  downloadButton: css`
    position: absolute;
    top: 16px;
    right: 16px;
    border-radius: 999px;
    width: 40px;
    height: 40px;

    background: rgba(255, 255, 255, 0.15); 
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid #989898;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    padding: 0;
    cursor: pointer;
    z-index: 10;
    
    white-space: nowrap; 
    overflow: hidden; 
    transition: width 0.3s ease, transform 0.3s ease, padding 0.3s ease;

    &:hover {
      width: 150px; 
      transform: scale(1.05);
      gap: 8px;
      
      justify-content: flex-start;
      padding: 0 10px;
    }

    img {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  `,
  downloadText: css`
    color: ${THEME_COLORS.WHITE_COLOR};
    font-weight: 500;
    font-size: 14px;
    
    opacity: 0;
    max-width: 0; 
    
    transition: opacity 0.2s ease 0.1s, max-width 0.3s ease; 

    .download-button-wrapper:hover & {
        opacity: 1;
        max-width: 100px;
    }
  `,
  cardButton: css`
    box-shadow: none;
    background-color: ${THEME_COLORS.WHITE_COLOR} !important;
    color: ${THEME_COLORS.PRIMARY_COLOR} !important;
    overflow: hidden;
    width: 230px;
    font-size: 22px;
    height: 50px !important;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 16px;
  ` 
};

const LandingTransparentCard = () => {
  const intl = useIntl();

  const handleDownloadCV = () => {
    console.log("Baixar CV!");
  };

  return (
    <Card css={GLASS_CARD_STYLE} bordered={false}>
        <Flex css={styles.container} align="left" justify="space-between" vertical>
          <Flex vertical>
            <h2 css={styles.profission}>
              <FormattedMessage id="home.profession" />
            </h2>
            <h1 css={styles.title}>EMANUEL VILELA</h1>
            <p css={styles.description}>
              <Typewriter
                words={[intl.messages['home.description'].toString()]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={3000}
              />
            </p>
          </Flex>

          <Flex css={styles.socialMedia}>
            <img
              src="src/assets/icons/instagram.png"
              alt="Instagram"
              onClick={() =>
                window.open('https://www.instagram.com/emanuelvsz', '_blank')
              }
            />
            <img
              src="src/assets/icons/github.png"
              alt="GitHub"
              onClick={() =>
                window.open('https://www.github.com/emanuelvsz', '_blank')
              }
            />
            <img
              src="src/assets/icons/linkedin.png"
              alt="LinkedIn"
              onClick={() =>
                window.open('https://www.linkedin.com/in/emanuelvsz/', '_blank')
              }
            />
          </Flex>
          <Button type='primary' css={styles.cardButton} >
            Get in touch
            <img src={cursorFingerIcon} height={22}/>
          </Button>
        </Flex>        
        <Flex css={styles.rightBlock} vertical gap={16}>
            <div css={styles.imageContainer}>
                <img src={meImg} alt="Emanuel Vilela" css={styles.profileImage} />
                <div 
                    css={styles.downloadButton} 
                    onClick={handleDownloadCV} 
                    className="download-button-wrapper"
                >
                    <img src={downloadIcon} alt="Download CV" />
                    <span css={styles.downloadText}>Download CV</span>
                </div>
            </div>
        </Flex>
    </Card>
  );
};

export default LandingTransparentCard;