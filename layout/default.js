import Header from '../components/Header'
import styled from 'styled-components';
import { colors } from 'styles/colors'
import Head from 'next/head'

const Main = styled.div`
    padding-left: 4vw;
    padding-right: 4vw;
`;

export default function DefaultLayout({ children }) {
    return (
        <Main>
            <Head>
                <title>Brainaviour</title>
                <style>{`body { background-color: ${colors.primary}; }`}</style>
            </Head>
            <Header />
            { children }
        </Main>
    )
}