import imgNosotros from "../../public/img/nosotros.jpg";
import style from '~/styles/nosotros.css';

export function links(){
  return [
    {
      rel:"stylesheet",
      href: style
    }
  ]
}

export function meta() {
  return [
    {
      title: 'GuitarLA - Nosotros',
      description: 'Venta de guitarras, blog de música'
    },
    {
      rel:'preload',
      href: imgNosotros,
      as: 'image'
    }
  ];
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imgNosotros} alt="imagen sobre nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            feugiat dui a ipsum vehicula elementum. Phasellus non arcu sit amet
            eros tincidunt gravida nec at nisl. Proin suscipit efficitur odio
            non blandit. Ut vel turpis libero. Vivamus vel convallis neque.
            Integer pharetra velit nisi, ut tincidunt nisi ultrices nec.
          </p>
          <p>
            Curabitur felis enim, volutpat id dapibus eget, faucibus in felis.
            Aenean tempus vestibulum laoreet. Cras a congue enim, vitae
            condimentum sapien. Donec in libero vehicula, consequat sem ac,
            efficitur justo. Nullam ut dui lectus. Quisque posuere nunc mi, non
            viverra leo sodales vel. Vivamus non euismod quam. Ut ut urna non
            tortor cursus mollis vel ut leo. Integer eget est eleifend, vehicula
            elit sit amet, accumsan justo. Suspendisse tempor condimentum ante
            id accumsan. Fusce interdum condimentum urna non feugiat.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
