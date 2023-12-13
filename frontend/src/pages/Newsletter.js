import PageContent from '../components/PageContent';

const NewsletterPage = () => {
  return <PageContent title='Newsletter' />;
};

export default NewsletterPage;

export const newsletterAction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');

  console.log(email);
  return { message: 'You have successfully signed up to our newsletter!' };
};
