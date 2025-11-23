import { THEME_COLORS } from '@config/theme';
import { Flex, Typography } from 'antd';
import arrowDownIcon from '@assets/icons/fi-rs-arrow-small-down.svg';

const ScrollToSeeContainer = () => {
  return (
    <Flex
      style={{
        height: '100vh',
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Flex
        style={{
          height: 300,
          width: '110dvw',
          backgroundColor: '#fff',
          rotate: '1deg',
          position: 'absolute',
          top: '4rem',
          left: '-5dvw',
        }}
      >
        .
      </Flex>

      <Flex
        vertical
        align="center"
        style={{
          position: 'absolute',
          width: '100%',
          top: 'calc(4rem + 120px)',
          zIndex: 1,
          color: 'white',
          fontSize: '1.8rem',
          fontFamily: 'monospace',
          textAlign: 'center',
        }}
      >
        <Typography.Title
          style={{
            margin: 0,
            padding: 0,
            color: THEME_COLORS.PRIMARY_COLOR,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            fontWeight: 'bold',
          }}
        >
          scroll(); // There is still more to see
          <img src={arrowDownIcon} height={35} />
        </Typography.Title>
      </Flex>

      <Flex
        style={{
          height: 300,
          width: '110dvw',
          backgroundColor: '#fff',
          rotate: '-3deg',
          position: 'absolute',
          top: 'calc(4rem)',
          left: '-5dvw',
        }}
      >
        .
      </Flex>
    </Flex>
  );
};

export default ScrollToSeeContainer;
