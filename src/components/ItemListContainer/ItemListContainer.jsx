import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListContainer.css';

function ItemListContainer({ items }) {
    const { categoryId } = useParams();
    const filteredItems = categoryId
        ? items.filter(item => {
            const map = {
                blends: 'Blends',
                press: 'Coffee-Press',
                accessories: 'Accessories',
            };
            return item.category === map[categoryId];
        })
        : items;
    return (
        <div>
            <ItemList items={filteredItems} />
        </div>
    );
}

export default ItemListContainer;
