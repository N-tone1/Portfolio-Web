import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, Arrow } from '@/once-ui/components';
import { Projects } from '@/components/work/Projects';

import { baseURL, routes, renderContent } from '@/app/resources'; 
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {
	const t = await getTranslations();
    const { home } = renderContent(t);
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Home(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { home, about, person, newsletter } = renderContent(t);
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m">
					<Flex
						direction="column"
						fillWidth maxWidth="s" gap="m">
						 <RevealFx
							translateY="4">
							<Heading
								wrap="balance"
								variant="display-strong-l">
								{home.headline}
								{/*  <><img
										src="/images/avatar.jpg" //this is avatar image after h1
										alt="Anton"
										style={{
											width: '150px',
											height: '150px',
											borderRadius: '50%',
											objectFit: 'cover',
											marginTop: '2rem', // Add spacing between the heading and image
										}}
									/></>  */}
							</Heading>
						</RevealFx>
						 
						<RevealFx
							translateY="8" delay={0.2}>
							<Flex fillWidth>
								<Text
									wrap="balance"
									onBackground="neutral-weak"
									variant="heading-default-xl">
									{home.subline}
								</Text>
							</Flex>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4}>
							<Flex fillWidth>
								<Button
									id="about"
									data-border="rounded"
									href={`/${locale}/about`}
									variant="tertiary"
									size="m">
									<Flex
										gap="8"
										alignItems="center">
										{about.avatar.display && (
											<Avatar
												style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
												src={person.avatar}
												size="m"/>
											)}
											{t("about.title")}
											<Arrow trigger="#about"/>
									</Flex>
								</Button>
							</Flex>
						</RevealFx>
					</Flex>
				
			</Flex>
			{/* This RevealFx component is responsible for creating area with work project photo and beneath short summary  */}
			<RevealFx translateY="16" delay={0.6}> 
				<Projects range={[1,3]} locale={locale}/>
			</RevealFx>
			{routes['/blog'] && (
				<Flex
					fillWidth gap="24"
					mobileDirection="column">
					<Flex flex={1} paddingLeft="l">
						
						<Heading 						//Here is a section in home window where we can see Latest blog posts
							as="h2"
							variant="display-strong-xs"
							wrap="balance">
							Latest from the blog 
						</Heading>
					</Flex>
					<Flex //array of blog articles
						flex={3} paddingX="20">
						<Posts range={[1,4]} columns="2" locale={locale}/>
					</Flex>
				</Flex>
			)}
{/* 			<Projects range={[2]} locale={locale}/> */}
			{ newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
		</Flex>
	);
}
