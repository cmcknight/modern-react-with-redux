import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: 'adfasdfasf',
      label: 'First Section',
      content: 'This is the first section',
    },
    {
      id: 'asdfa',
      label: 'Second Section',
      content: 'This is the second section',
    },
    {
      id: ';lkj;',
      label: 'Third Section',
      content: 'This is the third section',
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
