import React from 'react';
import Item from './utils/Item';
import Title from './utils/Title';

const Sales = ({ endpoint, ifExists }) => {
	return (
		<>
			<div className="nike-container">
				<Title title={endpoint.title} />
				<div
					className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 
					${
						ifExists
							? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1'
							: 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
					}
					`}>
					{endpoint.items?.map((item, i) => (
						<Item key={i} {...item} ifExists={ifExists} />
					))}
				</div>
			</div>
		</>
	);
};

export default Sales;
