import Product from './components/Product';

const products = [
    {
        id: 1,
        title: 'Product 1',
        price: 12990,
        inStock: true,
        availability: 'В наличии на складе Алматы',
        rating: 4,
        tags: ['New']
    },
    {
        id: 2,
        title: 'Product 2',
        price: 69990,
        inStock: true,
        availability: 'Доставка 1–2 дня',
        rating: 5,
        tags: ['Sale', 'Top']
    },
    {
        id: 3,
        title: 'Product 3',
        price: 15990,
        inStock: false,
        availability: 'Ожидается поставка',
        rating: 3,
        tags: ['Limited']
    }
];

export default function App() {
    return (
        <main style={page.container}>
            <h1 style={page.h1}>Каталог</h1>
            <section style={page.grid}>
                {products.map(p => (
                    <Product
                        key={p.id}
                        title={p.title}
                        price={p.price}
                        inStock={p.inStock}
                        availability={p.availability}
                        rating={p.rating}
                        tags={p.tags}
                    />
                ))}
            </section>
        </main>
    );
}

const page = {
    container: { maxWidth:960, margin:'40px auto', padding:'0 16px' },
    h1: { fontSize:28, marginBottom:16 },
    grid: { display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:16 }
};