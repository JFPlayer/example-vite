import { FunctionComponent, useEffect, useState } from 'react';

const Poster: FunctionComponent<Props> = ({ className }) => {
  const [status, setStatus] = useState<{
    error: boolean,
    loading: boolean,
  }>({ error: false, loading: false })

  const [response, setResponse] = useState<Response>()

  useEffect(() => {
    (() => {
      setStatus({ loading: true, error: false })
      fetch('https://www.whenisthenextmcufilm.com/api')
        .then(response => response.json())
        .then((data: Response) => {
          setResponse(data)
          setStatus({ loading: false, error: false })
          })
        .catch(() => setStatus({ loading: false, error: true }))
    })()
  }, [])

  if (response)
    return (
      <div className={className}>
        <h1>Faltan {response.days_until} días</h1>
        <img src={response.poster_url} alt=""/>
      </div>
    )
  
  return null;
}

interface Props {
  className?: string;
}

interface Response {
  days_until: number;
  overview: string;
  poster_url: string;
  release_date: string;
  title: string;
  type: string;
  following_production: string;
}

export default Poster;
