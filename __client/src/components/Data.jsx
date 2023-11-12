const stats = [
    { id: 1, name: 'Dinero levantado', value: 'RD$5 M' },
    { id: 2, name: 'Cantidad de inversores', value: '95' },
    { id: 3, name: 'Meta actual a lograr', value: 'RD$10 M' },
  ]
  
  export default function Data({dat}) {
    let {investors, goal, raised} = dat;
    return (
      <div className="bg-white py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            
             <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">Dinero levantado</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {raised}
                </dd>
              </div>

              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">Cantidad de inversores</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {investors}
                </dd>
              </div>

              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">Meta actual a lograr</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {goal}
                </dd>
              </div>
          </dl>
        </div>
      </div>
    )
  }