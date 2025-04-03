import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import { getCurrentUser, getInterviewByUserId, getLatestInterviews } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] =await Promise.all([
    await getInterviewByUserId(user?.id!),
    await getLatestInterviews({userId: user?.id!})
  ]) 

  // @ts-ignore
  const hasPastInterviews = userInterviews?.length > 0;
    // @ts-ignore
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
            <h2>Get Interview ready with AI powered practice and feedback</h2>
            <p className='text-lg'>Practice on real interview questions and get instant feedback</p>
            <Button asChild className='btn-primary max-sm:w-full'>
              <Link href={'/interview'}>Start an Interview</Link>
            </Button>
        </div>
 
        <Image src={'/robot.png'} alt='robot' width={400} height={400} className='max-sm:hidden' />
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your interviews</h2>
        <div className='interviews-section'>
          {hasPastInterviews ? (
            userInterviews?.map((interview)=> (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ): (
            <p>You haven't taken any interviews yet</p>
          )
          }
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an interview</h2>
        <div className='interviews-section'>
        {hasUpcomingInterviews ? (
            latestInterviews?.map((interview)=> (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ): (
            <p>There are no interviews available</p>
          )
          }
        </div>
      </section>
    </>
  )
}

export default Page