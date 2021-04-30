import Link from 'next/link'
import { MainHeader, HeaderItem, HeaderMainItem, HeaderText, HeaderTitle } from './styles'

export default function Header () {
    return (
        <MainHeader>
            <HeaderMainItem>
                <HeaderTitle>🧠 Brainaviour</HeaderTitle>
            </HeaderMainItem>
            <HeaderItem>
                <HeaderText>
                    <Link href="/">Home</Link>
                </HeaderText>
            </HeaderItem>
            <HeaderItem>
                <HeaderText>
                    <Link href="/explore">Explore</Link>
                </HeaderText>
            </HeaderItem>
            <HeaderItem>
                <HeaderText>Research</HeaderText>
            </HeaderItem>
            <HeaderItem>
                <HeaderText>About Us</HeaderText>
            </HeaderItem>
        </MainHeader>
    )
}
