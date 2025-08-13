import { Card, CardContent } from "@/components/ui/card"

export default function About() {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12">
                <div className="about">
                    <h1 className='text-left text-4xl text-white mb-2'>About EMAI Conference</h1>

                    <p className='text-white text-justify text-lg mb-5'>EnhanceMind AI(emAI) Conference is an event prepared and hosted by CameLabs to explore the fundamentals, advances, and breakthroughs in Artificial Intelligence.</p>
                    <p className='text-white text-justify text-lg'>The EnhanceMind AI Conference is a premier event for professionals in the field of Artificial Intelligence, Machine Learning, and Data Science.
                        The conference is expected to attract diverse attendees from various industries such as technology, healthcare, finance, and more.
                        Attendees include C-level executives, researchers, data scientists, engineers, and developers who are looking to stay on the cutting edge of the latest advancements in AI technology.
                        The conference also attracts start-up companies and entrepreneurs who are interested in exploring new opportunities in the AI industry.
                    </p>
                </div>
                <div className="image">
                    <h1 className='text-white'>Image Goes Here</h1>
                </div>
            </div>

            <div className="insights-card">
                <Card className="rounded-full mx-48">
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}