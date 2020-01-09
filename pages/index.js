import Link from 'next/link';
import BaseLayout from '../components/BaseLayout'


const Index = () => (
    <BaseLayout>
        <h1>
            Next.js Main Page.
        </h1>

        <Link href='/about'>
            <a>Link API - About</a>
        </Link>

        <br/>

        <a href='/about'>A tag - About</a>
    </BaseLayout>
);

export default Index;
