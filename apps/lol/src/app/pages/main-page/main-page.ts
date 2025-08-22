import { Component, inject, OnInit } from '@angular/core';
import { Character, CharacterData, CharacterList, CharacterLore } from '@champion-finder/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CharacterList, CharacterData, CharacterLore],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  selectedCharacterId: number | null = null;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.selectedCharacterId = id ? Number(id) : null;
    });
  }

  characters = [
    {
      id: 266,
      name: 'Aatrox',
      image: `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/Aatrox.png`,
      description:
        'Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de encarceramento, Aatrox foi o primeiro a encontrar a liberdade novamente, e ele saiu corrompendo e transformando quem fosse tolo o suficiente de tentar tocar na arma mágica que continha sua essência. Agora, com um corpo roubado, ele vaga por Runeterra transfigurado, em uma versão bizarra da sua forma anterior, buscando uma vingança apocalíptica.',
      title: 'a Espada Darkin'
    },
    {
      id: 103,
      name: 'Ahri',
      image: `https://ddragon.leagueoflegends.com/cdn/13.20.1/img/champion/Ahri.png`,
      description:
        'A ligação de Ahri com a magia do mundo espiritual é inata. Ela é uma vastaya com traços de raposa, capaz de manipular as emoções de sua presa e consumir sua essência, devorando também as memórias e as percepções de cada alma absorvida. Outrora uma predadora poderosa, porém rebelde, Ahri agora viaja pelo mundo em busca de vestígios dos seus antepassados enquanto tenta substituir as memórias roubadas por novas de sua própria autoria.',
      title: 'a Raposa de Nove Caudas'
    },
  ] as Character[];

  tabs = ['História', 'Habilidades'];

  onCharacterSelected(character: Character): void {
    this.router.navigate(['/lol', character.id]).then();
  }
}
