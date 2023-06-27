import { css } from '@emotion/react'

export const common = {
    screen: css({
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'auto',
        scrollBehavior: 'smooth',
        backgroundColor: '#C3B68F',
    }),
    containerPC: css({
        width: '500vw',
        height: '100%',
        display: 'flex',
    }),
    containerSP: css({
        height: '100%',
        display: 'block',
    }),
    wrapperPC: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: 'calc(100% - 4rem)',
        marginTop: '4rem',
    }),
    wrapperSP: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
        height: '100%',
    }),
    wrapperVariableSP: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100vw',
    }),
    contentWrapperPC: css({
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F0E9',
    }),
    contentWrapperSP: css({
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#F2F0E9',
        paddingTop: '4rem'
    }),
    headlineTitleSP: css({
        textAlign: 'center',
        fontFamily: 'Capriola',
        fontSize: '3em',
    }),
    headlineIconSP: css({
        fontSize: '.8em',
        verticalAlign: 'baseline',
        marginRight: '.3em',
    }),
}