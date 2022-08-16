import { Fragment } from 'react';
import './List.scss';

interface ListProps {
    lines: number,
    title?: boolean,
    quantity: number,
    showItems?: boolean,
    numberOfItems?: number,

}

export const List = ({ lines, quantity, title, showItems, numberOfItems = 1 }: ListProps) => {
    const skeleton_list = Array.from({ length: quantity }, (_, i) => i);
    const linesArray = Array.from({ length: lines }, (_, i) => i);
    const items = showItems ? Array.from({ length: numberOfItems }, (_, i) => i) : [];

    return (
        <div className='skeleton-list'>
            {
                skeleton_list.map((_, i) => (
                    <Fragment key={i}>
                        {title && <div className='skeleton-list__title skeleton'></div>}
                        {
                            linesArray.map((_, i) => (
                                <div className='skeleton-list__content' key={i}></div>
                            ))
                        }
                        {
                            showItems && <div className='skeleton-list__items'>
                                {
                                    items.map((_, i) => (
                                        <div className='skeleton-list__item' key={i}></div>
                                    ))
                                }
                            </div>
                        }
                    </Fragment>
                ))
            }
        </div>
    )
}
