import Schedule from '@/components/re-used/Schedule'

export default function ScheduleComponent() {
    return (
        <div id='schedule'>
            <div className="max-w-5xl mx-auto px-4 pt-12">
                <h1 className="font-montserrat text-brand-red text-4xl sm:text-5xl font-bold text-left mt-4">Conference Schedule</h1>
                <p className='text-left text-xl text-brand-gray font-montserrat my-2 italic'>Here is the sessions breakdown for all the three days. All times are in EAT timezone</p>
                <Schedule />
            </div>
        </div>
    )
}