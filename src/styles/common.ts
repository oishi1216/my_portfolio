import { css } from '@emotion/react'

export const common = {
    screen: css({
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        scrollBehavior: 'smooth',
    }),
    container: css({
        width: '500vw',
        height: '100%',
        display: 'flex',
    }),
    wrapper: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: 'calc(100% - 4rem)',
        marginTop: '4rem',
    }),
    contentWrapper: css({
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F0E9',
    })
}