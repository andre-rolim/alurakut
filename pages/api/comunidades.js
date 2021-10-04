import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = "1a530e77403cc4d89ce299808b5e58";

    const client = new SiteClient(TOKEN);

    const registroCriado = await client.items.create({
      itemType: "1173046",
      ...request.body,
      //title: "Esdeath",
      //imageUrl: "https://i.pinimg.com/736x/21/4e/a6/214ea6d42112a87b4ce1660e194d2e4d.jpg",
      //linkUrl: "akamegakill.fandom.com/wiki/Esdeath",
      //creatorSlug: "andre-rolim",
    });

    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }

  response.status(404).json({
    message: "ainda não temos nada no GET, mas no POST tem!",
  });
}
