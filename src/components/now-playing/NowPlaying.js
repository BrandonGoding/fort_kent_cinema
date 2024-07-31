
export default function NowPlaying({title, starting, features, plot}) {
  return (
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Starting {starting}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                  {plot}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600"/>
                        {feature.name}
                      </dt>
                      {' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                ))}
              </dl>
            </div>
          </div>
  )
}
