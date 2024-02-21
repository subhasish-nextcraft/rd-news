import Dropdown from 'ui/Dropdown';

const categories = [
  { label: 'All', link: '/blogs' },
  { category: 'business', label: 'Business', link: '/blogs?category=business' },
  {
    category: 'marketing',
    label: 'Marketing',
    link: '/blogs?category=marketing',
  },
  {
    category: 'optimization',
    label: 'Optimization',
    link: '/blogs?category=optimization',
  },
  {
    category: 'technology',
    label: 'Technology',
    link: '/blogs?category=technology',
  },
  {
    category: 'ux-design',
    label: 'UX Design',
    link: '/blogs?category=ux-design',
  },
];

const FilterOptions = categories.map((item) => (
  <a
    href={item.link}
    className="block py-2 px-4 cursor-pointer hover:bg-pry-100 text-slate-800 font-medium"
  >
    {item.label}
  </a>
));

type Props = {
  selectedCategory?: string;
};

export default function BlogFilter({ selectedCategory }: Props) {
  return (
    <div className="">
      <Dropdown
        label={
          categories.find((item) => item.category === selectedCategory)
            ?.label || 'All'
        }
        items={FilterOptions}
      />
    </div>
  );
}
