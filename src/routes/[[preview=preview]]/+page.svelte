
<script lang='ts'>
 import enzos from '$lib/assets/icons/logos/enzos.svg'
import { PrismicImage, PrismicRichText } from '@prismicio/svelte';
import { onMount } from 'svelte';

// Add timing constants here
const FEATURE_TOTAL_TIME = 21000; // Time to display each feature (ms)
const FEATURE_ACTIVE_TIME = 7000;   // Time to remain in active state (ms)

let { data } = $props();
let viewpoortWidth=$state(1024)
let content = $state(data.page.data);
 $effect(()=> {data; content = data.page.data;})
let isFeatureActive = $state(false);
let featuredIndex = $state(-1);
let featuredItem = $state(content.featured_items[0]);
let showStar = $derived(featuredIndex>content.menu_items.length-1)

const nextFeature = () => {
 isFeatureActive = true;
if (featuredIndex < content.menu_items.length+content.featured_items.length-1) {
 featuredIndex += 1;
 } else {
 featuredIndex = 0;
 }
if(featuredIndex > content.menu_items.length-1){
 featuredItem = content.featured_items[featuredIndex-content.menu_items.length];
 }else{
 featuredItem = content.menu_items[featuredIndex];
 }
 }

let interval:NodeJS.Timeout;
let activeStateTimeout:NodeJS.Timeout;

onMount(() => {


 interval = setInterval(() => {
   nextFeature();
   
   // Clear any existing active state timeout
   if (activeStateTimeout) clearTimeout(activeStateTimeout);
   
   // Set new timeout to deactivate the feature after FEATURE_ACTIVE_TIME
   activeStateTimeout = setTimeout(() => {
     isFeatureActive = false;
   }, FEATURE_ACTIVE_TIME);
   
 }, FEATURE_TOTAL_TIME);

 return () => {
   clearInterval(interval);
   if (activeStateTimeout) clearTimeout(activeStateTimeout);
 };
 });
</script>

<!-- Existing style section remains unchanged -->
<style>
	h1{
		text-align: center;
		font-family: 'Venn' , sans-serif;
		font-size: 65px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 3.9px;
	}
	h2{
		color: #000;
		font-family: 'Venn';
		font-size: 38px;
		font-style: normal;
		font-weight: 700;
		line-height: 0.75em;
		letter-spacing: 1.9px;
	}

	h3{
		color: #000;
		font-family: franklin-gothic-urw, sans-serif;
		font-size: 28px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.28px;
		text-transform: uppercase;
	}

	h4{
		color: #000;
		font-family: "coffee-service";
		font-size: 36px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 1.08px;
		text-transform: capitalize;
	}

	.starting-at{
		color: #000;
		font-family: venn-semiextended, sans-serif;
		font-size: 18px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}

	.dollar{
		color: #000;
		font-family: 'Venn';
		font-size: 15px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 0.75px;
	}

	.footer{
		color: #000;
		text-align: center;
		font-family: franklin-gothic-urw, sans-serif;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		letter-spacing: 2px;
	}

	.white-number{
		color: #FFF6ED;
		font-family: 'Venn', sans-serif;
		font-size: 15px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}

	.detailing{
		color: #000;
		font-family: 'venn-extended', sans-serif;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		letter-spacing: 2.56px;
	}

	.feature-number{
		font-family: franklin-gothic-urw, sans-serif;
		font-size: 53px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: 0.53px;
		text-transform: uppercase;
	}

	.feature-headline{
		font-family: franklin-gothic-urw, sans-serif;
		font-size: 75px;
		font-style: normal;
		font-weight: 600;
		line-height: 75px; /* 100% */
		letter-spacing: 0.75px;
		text-transform: uppercase;
	}

	.menu-description{
    color: #000;
		font-family: franklin-gothic-urw, sans-serif;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.feature-body{
		font-family: franklin-gothic-urw, sans-serif;
		font-size: 38px;
		font-style: normal;
		font-weight: 400;
		line-height: 55px; /* 144.737% */
	}

	.feature-cost{
		font-family: "coffee-service";
		font-size: 90px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 2.7px;
	}

	.feature-time{
		font-family: franklin-gothic-urw, sans-serif;
		font-size: 36px;
		font-style: normal;
		font-weight: 600;
		line-height: 45px; /* 125% */
	}
</style>

<svelte:window bind:innerWidth={viewpoortWidth} />

<button class='absolute top-2 right-2 z-20' onclick={()=>{isFeatureActive=!isFeatureActive; clearInterval(interval)}}><i class='fa-solid {isFeatureActive?'fa-toggle-on':'fa-toggle-off'} fa-2xl text-primary'></i></button>
<button class='absolute bottom-2 right-2 z-20' onclick={()=>{nextFeature(); clearInterval(interval);}}><i class='fa-solid fa-arrow-right fa-2xl text-primary'></i></button>

<div class='w-screen h-screen p-12 bg-white relative'>	
	<div class='w-full h-full relative bg-[#FFF6ED]'> 
			<!-- First section (menu items) -->
			<div class='w-full h-full absolute flex flex-col justify-between py-8 px-16 '>
				<div class='overflow-hidden h-48'>
					<div class='flex flex-col items-center gap-3 transition-transform duration-[2000ms] ease-fast-slow pb-1 h-48  {!isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
						<!-- Logo SVG (using placeholder) -->
						<div class="w-[340px] h-[35px]">
							<!-- SVG placeholder -->
							<svg xmlns="http://www.w3.org/2000/svg" width="340" height="35" viewBox="0 0 340 35" fill="none">
							<path d="M3.66585 23.5949C6.06478 23.0995 8.45909 24.7293 8.9486 27.1572C9.45116 29.6497 7.8727 32.0663 5.44179 32.5683C2.97888 33.0769 0.591105 31.4795 0.0950683 29.0192C-0.414022 26.4943 1.17096 24.1101 3.66585 23.5949Z" fill="black"/>
							<path d="M40.1059 9.2794L43.3563 31.0691L38.3207 31.8384L35.0704 10.0488L40.1059 9.2794Z" fill="black"/>
							<path d="M61.9878 6.26381L62.5467 10.588L57.2058 11.2951L59.4712 28.8213L54.3569 29.4984L52.0915 11.9722L46.7182 12.6836L46.1593 8.35938L61.9878 6.26381Z" fill="black"/>
							<path d="M69.0527 14.5022L70.7791 9.88673L68.5729 10.135L68.0714 5.57078L72.6786 5.05236L73.1187 9.05835L70.8047 14.305L69.0527 14.5022Z" fill="black"/>
							<path d="M96.426 7.62068L92.2629 9.45934C91.3071 7.55607 90.3086 7.01673 88.2602 7.20326C86.3745 7.37499 85.3659 8.19661 85.4741 9.41411C85.5882 10.6974 86.4183 11.1858 88.8002 11.4333C92.113 11.8282 93.4841 12.1346 94.6568 12.7907C96.5887 13.8753 97.728 15.6292 97.9152 17.7352C98.12 20.0385 97.0864 22.4215 95.2496 23.8825C93.9335 24.9311 91.929 25.6112 89.653 25.8185C87.117 26.0494 85.0131 25.6108 83.2762 24.5084C81.8141 23.5469 81.1086 22.616 80.3007 20.5334L84.8861 19.0211C85.6911 21.0708 87.1415 21.9007 89.5475 21.6816C91.6934 21.4862 92.9474 20.4764 92.8216 19.0615C92.7046 17.7452 91.7741 17.2329 88.8277 16.9041C86.3778 16.6296 84.9388 16.2962 83.6685 15.649C81.8871 14.7829 80.7833 13.0589 80.5902 10.8872C80.4089 8.84704 81.0045 7.06786 82.3506 5.61841C83.6967 4.16896 85.4323 3.41382 87.8708 3.19176C90.2118 2.97859 92.1473 3.36626 93.7099 4.3518C94.9239 5.10372 95.5852 5.90596 96.426 7.62068Z" fill="black"/>
							<path d="M126.617 0.870222L134.471 22.5521L128.993 22.817L127.443 18.3606L120.432 18.6996L119.276 23.287L114.809 23.503L120.715 1.15565L126.617 0.870222ZM121.447 14.5822L126.077 14.3583L123.398 6.74808L121.447 14.5822Z" fill="black"/>
							<path d="M145.908 17.9035L154.557 17.7198L154.647 22.0799L140.841 22.3732L140.384 0.341514L145.541 0.231936L145.908 17.9035Z" fill="black"/>
							<path d="M166.476 17.6947L175.127 17.7272L175.111 22.0882L161.302 22.0364L161.383 0L166.541 0.0193388L166.476 17.6947Z" fill="black"/>
							<path d="M199.258 0.731432L198.434 22.7522L193.345 22.5571L194.169 0.536295L199.258 0.731432Z" fill="black"/>
							<path d="M224.355 2.11048L223.03 24.1062L218.663 23.8366L211.055 8.43897C211.066 8.80373 211.048 9.10052 211.042 9.19946C211.045 9.69612 211.058 10.0279 211.05 10.1598L210.257 23.3177L206.314 23.0743L207.64 1.07857L213.114 1.41651L219.729 14.8331C219.706 14.1366 219.693 13.8048 219.719 13.3761L220.413 1.86709L224.355 2.11048Z" fill="black"/>
							<path d="M258.963 5.30283L258.524 9.64119L253.165 9.08565L251.386 26.6691L246.255 26.1372L248.034 8.55369L242.644 7.99478L243.083 3.65643L258.963 5.30283Z" fill="black"/>
							<path d="M282.198 8.25536L279.391 30.1081L274.438 29.4566L275.595 20.4468L268.829 19.5568L267.672 28.5665L262.719 27.915L265.526 6.06226L270.479 6.7138L269.385 15.2321L276.151 16.1221L277.245 7.60382L282.198 8.25536Z" fill="black"/>
							<path d="M305.878 16.2022L295.626 14.5484L294.922 19.0182L302.982 20.3184L302.34 24.3967L294.28 23.0965L293.53 27.86L303.781 29.5138L303.103 33.8205L287.726 31.3398L291.153 9.57793L306.531 12.0586L305.878 16.2022Z" fill="black"/>
							<path d="M336.491 25.9613C338.883 26.4907 340.421 28.9616 339.898 31.3823C339.361 33.8675 336.951 35.431 334.527 34.8946C332.072 34.3512 330.527 31.9125 331.057 29.4596C331.601 26.9421 334.004 25.4108 336.491 25.9613Z" fill="black"/>
						</svg>
						</div>
						<div class='bg-primary h-[2.5px] w-14'></div>
						<div class='relative h-fit w-fit'>
							<h1 class='text-black absolute z-10'>DETAILS</h1>
							<h1 class='text-primary translate-y-[3.5px] translate-x-[0.5px]'>DETAILS</h1>
						</div>
					</div>
				</div>
					<div class='flex flex-row h-full mt-3'>
						<div class='w-3/5 flex flex-col gap-8'>
							{#each content.menu_items as item, i}
								<div class='overflow-hidden'>
									<div class='w-full pr-24 flex flex-row transition-transform duration-[2000ms] ease-fast-slow pb-1  {!isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
										<h3 class='w-16 text-black'>{'0'+(i+1)}</h3>
										<div class='w-full flex flex-col gap-3'>
											<div class='flex flex-row items-center justify-between'>
												<h3 class='pr-10 text-nowrap'>{item.name}</h3>
												<div class='w-full h-0.5 bg-primary'></div>
											</div>
											<div class='flex flex-row items-start justify-between'>
												<div class='pr-16 w-full menu-description'>
													<PrismicRichText field={item.description}/>
												</div>
												<div class='w-52 flex flex-row justify-between items-start'>
													<p class='menu-description'><b>{item.time}</b></p>
													<div class='flex'>
														<div class='dollar'>$</div>
														<h2>{item.cost}</h2>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</div>
					<div class='w-2/5 flex flex-col gap-6'>
						{#each content.featured_items as item, i}
							<div class='overflow-hidden'>
								<div class='flex flex-row transition-transform duration-[2000ms] ease-fast-slow pb-1   {!isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
									<div class='w-12 relative h-fit'>
										<!-- Star SVG placeholder -->
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" fill="none" class='w-full'>
											<path d="M22.6711 1.22841C23.0675 0.640884 23.9325 0.640882 24.3289 1.2284L25.9149 3.57869C26.2391 4.05912 26.9025 4.1642 27.3593 3.80746L29.5939 2.0623C30.1526 1.62605 30.9752 1.89333 31.1707 2.57461L31.9527 5.29995C32.1126 5.85706 32.7111 6.162 33.2558 5.96388L35.9203 4.99467C36.5864 4.75239 37.2861 5.26078 37.2615 5.96913L37.1631 8.80276C37.143 9.382 37.618 9.85697 38.1972 9.83686L41.0309 9.73847C41.7392 9.71387 42.2476 10.4136 42.0053 11.0797L41.0361 13.7442C40.838 14.2889 41.1429 14.8874 41.7001 15.0473L44.4254 15.8293C45.1067 16.0248 45.374 16.8474 44.9377 17.4061L43.1925 19.6407C42.8358 20.0975 42.9409 20.7609 43.4213 21.0851L45.7716 22.6711C46.3591 23.0675 46.3591 23.9325 45.7716 24.3289L43.4213 25.9149C42.9409 26.2391 42.8358 26.9025 43.1925 27.3593L44.9377 29.5939C45.374 30.1526 45.1067 30.9752 44.4254 31.1707L41.7001 31.9527C41.1429 32.1126 40.838 32.7111 41.0361 33.2558L42.0053 35.9203C42.2476 36.5864 41.7392 37.2861 41.0309 37.2615L38.1972 37.1631C37.618 37.143 37.143 37.618 37.1631 38.1972L37.2615 41.0309C37.2861 41.7392 36.5864 42.2476 35.9203 42.0053L33.2558 41.0361C32.7111 40.838 32.1126 41.1429 31.9527 41.7001L31.1707 44.4254C30.9752 45.1067 30.1526 45.374 29.5939 44.9377L27.3593 43.1925C26.9025 42.8358 26.2391 42.9409 25.9149 43.4213L24.3289 45.7716C23.9325 46.3591 23.0675 46.3591 22.6711 45.7716L21.0851 43.4213C20.7609 42.9409 20.0975 42.8358 19.6407 43.1925L17.4061 44.9377C16.8474 45.374 16.0248 45.1067 15.8293 44.4254L15.0473 41.7001C14.8874 41.1429 14.2889 40.838 13.7442 41.0361L11.0797 42.0053C10.4136 42.2476 9.71387 41.7392 9.73847 41.0309L9.83686 38.1972C9.85697 37.618 9.382 37.143 8.80276 37.1631L5.96913 37.2615C5.26079 37.2861 4.75239 36.5864 4.99467 35.9203L5.96388 33.2558C6.162 32.7111 5.85706 32.1126 5.29995 31.9527L2.5746 31.1707C1.89332 30.9752 1.62605 30.1526 2.0623 29.5939L3.80746 27.3593C4.1642 26.9025 4.05912 26.2391 3.57869 25.9149L1.22841 24.3289C0.640884 23.9325 0.640882 23.0675 1.2284 22.6711L3.57869 21.0851C4.05912 20.7609 4.1642 20.0975 3.80746 19.6407L2.0623 17.4061C1.62605 16.8474 1.89333 16.0248 2.57461 15.8293L5.29995 15.0473C5.85706 14.8874 6.162 14.2889 5.96388 13.7442L4.99467 11.0797C4.75239 10.4136 5.26078 9.71387 5.96913 9.73847L8.80276 9.83686C9.382 9.85697 9.85697 9.382 9.83686 8.80276L9.73847 5.96913C9.71387 5.26078 10.4136 4.75239 11.0797 4.99467L13.7442 5.96388C14.2889 6.162 14.8874 5.85706 15.0473 5.29995L15.8293 2.5746C16.0248 1.89332 16.8474 1.62605 17.4061 2.0623L19.6407 3.80746C20.0975 4.1642 20.7609 4.05912 21.0851 3.57869L22.6711 1.22841Z" fill="#C42428"/>
										</svg>
										<div class='white-number absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>{'0'+(i+1)}</div>
									</div>
									<div class='w-full flex flex-col gap- pl-8'>
										<h4>{item.name}</h4>
										<PrismicRichText field={item.description} />
										<div class='mt-2'>
											<div class='starting-at'>Starting at</div>
											<div class='flex mt-2'>
												<div class='dollar'>$</div>
												<h2>{item.cost}</h2>
											</div>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<!-- Wrapped in overflow-hidden -->
				<div class='overflow-hidden h-48'>
					<div class='flex flex-row items-center justify-center gap-11 h-48 footer transition-transform duration-[2000ms] ease-fast-slow pb-1 {!isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
						<div>BOISE, ID</div>
						<div class='h-1.5 w-1.5 bg-black rounded-full'></div>
						<img src={enzos} alt='enzos logo' class='h-18' />
						<div class='h-1.5 w-1.5 bg-black rounded-full'></div>
						<div>EST 2024</div>
					</div>
				</div>
			</div>

			<!-- Featured content section -->
			<div class='w-full h-full absolute flex flex-row justify-between pl-16'>
				<div class='w-1/2 h-full flex flex-col justify-between py-8'>
					<!-- Header with transition -->
					<div class='overflow-hidden'>
						<div class='flex flex-row gap-5 items-center transition-transform duration-[2000ms] ease-fast-slow pb-1 {isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
							<div class='detailing'>DETAILING</div>
							<div class='h-1.5 w-1.5 bg-black rounded-full'></div>
							<h4>Add On Services</h4>
						</div>
					</div>
					
					<!-- Featured item content -->
					<div class='flex flex-row'>
						<div>
						<div class='overflow-hidden h-32 w-32 translate-y-2'>
							<div class='h-32 w-32 relative transition-transform duration-[2000ms] ease-fast-slow pb-1 {isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
								<!-- Star SVG with transition -->

									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47" fill="none" class='{showStar?'':'opacity-0'} w-full absolute top-0 left-0'>
										<path d="M22.6711 1.22841C23.0675 0.640884 23.9325 0.640882 24.3289 1.2284L25.9149 3.57869C26.2391 4.05912 26.9025 4.1642 27.3593 3.80746L29.5939 2.0623C30.1526 1.62605 30.9752 1.89333 31.1707 2.57461L31.9527 5.29995C32.1126 5.85706 32.7111 6.162 33.2558 5.96388L35.9203 4.99467C36.5864 4.75239 37.2861 5.26078 37.2615 5.96913L37.1631 8.80276C37.143 9.382 37.618 9.85697 38.1972 9.83686L41.0309 9.73847C41.7392 9.71387 42.2476 10.4136 42.0053 11.0797L41.0361 13.7442C40.838 14.2889 41.1429 14.8874 41.7001 15.0473L44.4254 15.8293C45.1067 16.0248 45.374 16.8474 44.9377 17.4061L43.1925 19.6407C42.8358 20.0975 42.9409 20.7609 43.4213 21.0851L45.7716 22.6711C46.3591 23.0675 46.3591 23.9325 45.7716 24.3289L43.4213 25.9149C42.9409 26.2391 42.8358 26.9025 43.1925 27.3593L44.9377 29.5939C45.374 30.1526 45.1067 30.9752 44.4254 31.1707L41.7001 31.9527C41.1429 32.1126 40.838 32.7111 41.0361 33.2558L42.0053 35.9203C42.2476 36.5864 41.7392 37.2861 41.0309 37.2615L38.1972 37.1631C37.618 37.143 37.143 37.618 37.1631 38.1972L37.2615 41.0309C37.2861 41.7392 36.5864 42.2476 35.9203 42.0053L33.2558 41.0361C32.7111 40.838 32.1126 41.1429 31.9527 41.7001L31.1707 44.4254C30.9752 45.1067 30.1526 45.374 29.5939 44.9377L27.3593 43.1925C26.9025 42.8358 26.2391 42.9409 25.9149 43.4213L24.3289 45.7716C23.9325 46.3591 23.0675 46.3591 22.6711 45.7716L21.0851 43.4213C20.7609 42.9409 20.0975 42.8358 19.6407 43.1925L17.4061 44.9377C16.8474 45.374 16.0248 45.1067 15.8293 44.4254L15.0473 41.7001C14.8874 41.1429 14.2889 40.838 13.7442 41.0361L11.0797 42.0053C10.4136 42.2476 9.71387 41.7392 9.73847 41.0309L9.83686 38.1972C9.85697 37.618 9.382 37.143 8.80276 37.1631L5.96913 37.2615C5.26079 37.2861 4.75239 36.5864 4.99467 35.9203L5.96388 33.2558C6.162 32.7111 5.85706 32.1126 5.29995 31.9527L2.5746 31.1707C1.89332 30.9752 1.62605 30.1526 2.0623 29.5939L3.80746 27.3593C4.1642 26.9025 4.05912 26.2391 3.57869 25.9149L1.22841 24.3289C0.640884 23.9325 0.640882 23.0675 1.2284 22.6711L3.57869 21.0851C4.05912 20.7609 4.1642 20.0975 3.80746 19.6407L2.0623 17.4061C1.62605 16.8474 1.89333 16.0248 2.57461 15.8293L5.29995 15.0473C5.85706 14.8874 6.162 14.2889 5.96388 13.7442L4.99467 11.0797C4.75239 10.4136 5.26078 9.71387 5.96913 9.73847L8.80276 9.83686C9.382 9.85697 9.85697 9.382 9.83686 8.80276L9.73847 5.96913C9.71387 5.26078 10.4136 4.75239 11.0797 4.99467L13.7442 5.96388C14.2889 6.162 14.8874 5.85706 15.0473 5.29995L15.8293 2.5746C16.0248 1.89332 16.8474 1.62605 17.4061 2.0623L19.6407 3.80746C20.0975 4.1642 20.7609 4.05912 21.0851 3.57869L22.6711 1.22841Z" fill="#C42428"/>
									</svg>
								
								
									<div class='feature-number {showStar?'text-white':''} relative z-10 w-full h-full flex items-center justify-center '>
										{showStar?'0'+(featuredIndex-content.menu_items.length+1):'0'+(featuredIndex+1)}
									</div>
								
							</div>
						</div>
						</div>
						<div class='ml-10'>
							<!-- Feature headline with transition -->
							<div class='overflow-hidden'>
								<div class='feature-headline w-4/5 transition-transform duration-[2000ms] ease-fast-slow pb-1 {isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
									{featuredItem?.name}
								</div>
							</div>
							
							<!-- Feature body with transition -->
							<div class='overflow-hidden mt-11'>
								<div class='feature-body pr-11 transition-transform duration-[2000ms] ease-fast-slow pb-1 {isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
									{#if featuredItem}<PrismicRichText field={featuredItem.description} />{/if}
								</div>
							</div>
							
							<!-- Price and time with transition -->
							<div class='overflow-hidden mt-11'>
								<div class='flex flex-row gap-11 transition-transform duration-[2000ms] ease-fast-slow pb-1 {isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
									<div class='flex mt-2'>
										<svg xmlns="http://www.w3.org/2000/svg" width="25" height="35" viewBox="0 0 25 35" fill="none">
											<path d="M25 2.99107C25 3.61607 24.6491 4.33036 23.9474 5.04464C22.807 6.29464 21.3158 8.08036 19.693 10.1786C19.9561 10.7589 20.2193 11.5179 20.2193 12.1875C20.2193 13.7946 18.6404 17.1429 17.2368 17.1429C16.1842 17.1429 15.5263 15.1786 15.5263 14.3304C15.5263 12.2321 17.2807 11.6964 17.2807 10.5804C17.2807 10.1786 17.0175 9.95536 16.5789 9.95536C14.7807 9.95536 11.4474 13.6607 11.4474 15.4018C11.4474 17.7679 15.3509 20.6696 15.3509 23.4375C15.3509 25.9821 12.3684 27.2321 10.2193 27.2321C9.38597 27.2321 8.46491 27.0982 7.58772 26.7857C5.17544 30.2232 3.33333 32.9464 2.7193 33.9286C2.23684 34.7321 1.84211 35 1.49123 35C0.657895 35 0 33.125 0 32.4554C0 31.9196 0.175439 31.4286 0.526316 30.9375C0.964912 30.4018 2.45614 28.125 4.47368 25.0446C2.19298 23.3482 1.22807 21.7857 1.22807 20.7589C1.22807 20.0446 1.71053 19.6429 2.36842 19.6429C3.46491 19.6429 4.82456 20.7143 5 21.9196C5.26316 23.6607 7.23684 24.9554 8.42105 24.9554C9.69298 24.9107 11.0088 24.2857 11.0088 22.8125C11.0088 22.0536 10.614 21.2946 9.91228 20.625C8.77193 19.6429 7.0614 17.6786 7.0614 14.7768C7.0614 10.8036 11.886 5.89286 15.614 5.89286C16.0965 5.89286 16.4912 6.02679 16.886 6.29464C18.5526 3.88393 20 1.875 20.9649 0.625C21.3596 0.178569 21.6667 0 21.9737 0C22.9825 0 25 1.91964 25 2.99107Z" fill="black"/>
										</svg>
										<div class='feature-cost -ml-1 -mt-5'>{featuredItem?.cost}</div>
									</div>
									<div class='h-16 w-1 bg-primary translate-y-4'></div>
									<div class='feature-time translate-y-5'>{featuredItem?.time}</div>
								</div>
							</div>
						</div>
					</div>
					
					<!-- Footer with transition - already implemented correctly -->
					<div class='overflow-hidden'>
						<div class='flex flex-row items-center justify-center gap-11 footer transition-transform duration-[2000ms] ease-fast-slow pb-1 {isFeatureActive ? 'translate-y-0 delay-[1800ms] ' : 'translate-y-full'}'>
							<div>BOISE, ID</div>
							<div class='h-1.5 w-1.5 bg-black rounded-full'></div>
							<img src={enzos} alt='enzos logo' class='h-18' />
							<div class='h-1.5 w-1.5 bg-black rounded-full'></div>
							<div>EST 2024</div>
						</div>
					</div>
				</div>
				
				<!-- Featured image with transition - already implemented correctly -->
				<PrismicImage field={featuredItem?.image} class='w-1/2 h-full object-cover transition-opacity  ease-fast-slow {isFeatureActive?'opacity-100 duration-[2000ms] delay-[1800ms] ':'opacity-0 duration-[2000ms] ease-fast-slow pb-1'}'/>
			</div>
	</div>
</div>