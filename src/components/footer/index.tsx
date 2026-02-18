/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Flex } from 'antd';
import { THEME } from '@lib/theme';
import { 
  THEME_BORDER_RADIUS, 
  THEME_PADDINGS 
} from '@config/theme';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import AnimatedButton from '@components/growable-button';

const styles = {
  footerWrapper: css`
    width: calc(100vw - ${THEME_PADDINGS.PAGE_PADDING * 2}px);
    margin-inline: auto; 
    margin-top: 60px;
    margin-bottom: 25px; 
    border-radius: ${THEME_BORDER_RADIUS.GENERAL}px;
    background-color: ${THEME.bgFooter};
    border: 1px solid ${THEME.border};
    padding: 40px !important;
    
    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 848px) {
       width: calc(100vw - 50px); 
    }
    
    @media (max-width: 480px) {
       width: calc(100vw - 32px);
       padding: 40px 20px; 
    }
  `,
  container: css`
    width: 100%;
    padding-inline: 0;
    box-sizing: border-box; 
  `,
  topSection: css`
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 40px;
    }
  `,
  brandName: css`
    font-size: 24px;
    font-weight: 700;
    color: ${THEME.textWhite};
    letter-spacing: -0.5px;
  `,
  brandDesc: css`
    font-size: 14px;
    color: ${THEME.textGray};
    max-width: 300px;
    line-height: 1.6;
  `,
  // Novo estilo para forçar o botão para a direita
  ctaWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Alinha o conteúdo à direita */
    text-align: right;     /* Garante que o texto fique à direita */
    
    @media (max-width: 768px) {
      align-items: flex-start;
      text-align: left;
    }
  `,
  divider: css`
    width: 100% !important;
    height: 1px;
    background-color: ${THEME.border};
    opacity: 0.5;
  `,
  bottomSection: css`
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column-reverse;
      gap: 24px;
      align-items: flex-start;
    }
  `,
  copyright: css`
    font-size: 12px;
    color: ${THEME.textGray};
  `,
  socialIcon: css`
    font-size: 20px;
    color: ${THEME.textGray};
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      color: ${THEME.textWhite};
      transform: translateY(-2px);
    }
  `
};

const Footer = () => {
  return (
    <Flex css={styles.footerWrapper} justify='space-between' align='center'>
      <Flex css={styles.container} vertical gap={50} justify='center'>
        
        <Flex css={styles.topSection} justify='space-between' align='center'>
          <Flex vertical gap={8}>
            <h2 css={styles.brandName}>EMANUEL VILELA</h2>
            <p css={styles.brandDesc}>
              Construindo soluções escaláveis e experiências digitais focadas no futuro da IA.
            </p>
          </Flex>

          <div css={styles.ctaWrapper}>
            <AnimatedButton 
              showLabel 
              icon={<FaEnvelope />} 
              text="Entrar em contato" 
              onClick={() => window.location.href = 'mailto:seu@email.com'} 
              label='Tem um projeto em mente?'
            />
          </div>
        </Flex>
        
        <div css={styles.divider} />
        
        <Flex css={styles.bottomSection} justify='space-between' align='center'>
          <p css={styles.copyright}>
            &copy; {new Date().getFullYear()} Emanuel Vilela. Todos os direitos reservados.
          </p>
          <Flex gap={24}>
            <a href="https://github.com/emanuelvsz" target="_blank" rel="noreferrer" css={styles.socialIcon} aria-label="Github">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/emanuelvsz" target="_blank" rel="noreferrer" css={styles.socialIcon} aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/emanuelvsz" target="_blank" rel="noreferrer" css={styles.socialIcon} aria-label="Instagram">
              <FaInstagram />
            </a>
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  );
};

export default Footer;