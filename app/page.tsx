import { redirect } from 'next/navigation'

export default function Home() {
  redirect('https://ryoga-xi.vercel.app/contact')

  // redirectがサーバー側で実行されるため、この下のコードは実際には実行されません。
  // return null;
}

//  bafudibiuba