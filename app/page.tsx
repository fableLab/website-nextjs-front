import Image from "next/image";
import Title from "./components/ui/Title";
import License from "./components/ui/License";
import SubTitle from "./components/ui/SubTitle";

export default function Home() {
  return (
    <>
      <Title name="Toutes les ressources" />
      <SubTitle name="La petite histoire" />
      <p>
        Pellentesque metus felis, rhoncus vitae odio ac, dapibus molestie odio. Aliquam sem ipsum, laoreet vel massa nec, blandit volutpat erat. Fusce vitae volutpat nulla. Proin fringilla tortor at mattis suscipit. Suspendisse at enim egestas, consequat augue quis, tempor sem. Pellentesque vitae cursus ipsum. Proin pharetra tincidunt purus sed sagittis. Sed mollis turpis velit, a porta nunc accumsan id. Curabitur aliquet felis dictum mi vehicula finibus. Quisque tincidunt, diam vel sodales molestie, urna tellus efficitur tortor, eu efficitur mi turpis eget nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur mollis volutpat lacinia. Proin ornare arcu sit amet eros placerat, feugiat efficitur justo lobortis. Ut dapibus posuere pulvinar. Suspendisse pharetra arcu nec nunc molestie, at imperdiet enim volutpat. Aenean ut dolor convallis, ultrices felis sit amet, lobortis libero.
      </p>
      <p>
        Sed erat elit, tincidunt nec dui ac, maximus dictum purus. Nunc ut nisl sollicitudin, scelerisque augue a, porta lacus. Duis congue est quis ante sollicitudin, ac mattis libero dapibus. Praesent venenatis ligula id odio egestas, eu cursus ipsum facilisis. Nullam bibendum in massa in tincidunt. Sed fermentum non nisi ac mattis. Duis nec elit id augue fringilla egestas eget vitae eros. Mauris lacinia pharetra aliquam. Nullam justo arcu, fermentum non enim sed, varius interdum risus.
      </p>
      <p>
        Sed posuere gravida dapibus. Nunc id tellus turpis. Phasellus interdum posuere leo at rutrum. In gravida iaculis turpis, id aliquam elit. Nam non consequat augue, eget tempor nisl. Nullam at orci felis. Donec quis vestibulum nulla. Phasellus blandit sem ut odio molestie, ut lobortis nunc sodales. Aliquam vitae pulvinar ipsum, eget porttitor tortor. Aliquam ex neque, pharetra vitae ornare eget, scelerisque ut arcu.
      </p>

      <License licenseItems={[
        {
          title: 'Graphisme et édition des cartes.',
          content: 'Léa Oriol',
        },
        {
          title: 'Mise en ligne sur Yiotta.',
          content: 'Yayneabeba Nigatu',
        },
      ]} description="2020 “Cartes illustrées Assistantes maternelles” par fable-Lab." />
    </>
  );
}
