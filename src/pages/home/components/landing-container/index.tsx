import { FormattedMessage } from 'react-intl';
// @ts-ignore
import styles from './styles.module.scss';

import { Flex } from 'antd';

const LandingContainer =  () => {
    return (
    <Flex className={styles.container} align='left' justify='space-between' vertical>
        <h1 className={styles.title}>EMANUEL VILELA</h1>
        <h1 className={styles.profission}>
            <FormattedMessage id='home.profession'/>
        </h1>
        <p>| <FormattedMessage id='home.description'/></p>
    </Flex>
    )   
}

export { LandingContainer };