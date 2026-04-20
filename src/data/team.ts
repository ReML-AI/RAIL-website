// =====================================================================
// RAIL Team Data
// To reassign someone: move their entry between group arrays below.
// Photo files are in /public/images/team/
// =====================================================================

export type TeamMember = {
  name: string;
  photo: string | null;
};

export type ResearchGroup = {
  tag: string;
  name: string;
  members: TeamMember[];
};

export const director: TeamMember & { title: string } = {
  name: "Harry Nguyen",
  title: "A/Prof",
  photo: "/images/team/harry-nguyen.png",
};

// TODO: Verify group assignments — move members between groups as needed
export const groups: ResearchGroup[] = [
  {
    tag: "SPATIAL",
    name: "Spatial Intelligence",
    members: [
      { name: "Incoming PD", photo: null },
      { name: "Vu Xuan Dinh", photo: "/images/team/vu-xuan-dinh.png" },
      { name: "Gia Tuan Nghia Nguyen", photo: "/images/team/gia-tuan-nghia-nguyen.jpg" },
      { name: "Manh Thang Tran", photo: "/images/team/manh-thang-tran.jpg" },
    ],
  },
  {
    tag: "COLLECTIVE",
    name: "Collective Intelligence",
    members: [
      { name: "Dr Mai Le", photo: "/images/team/mai-le.jpg" },
      { name: "Minh-Quy Le", photo: "/images/team/minh-quy-le.jpg" },
      { name: "Khanh-Vinh Tran", photo: "/images/team/khanh-vinh-tran.png" },
      { name: "Minh Quang Nguyen", photo: "/images/team/minh-quang-nguyen.jpg" },
      { name: "Uyen Dinh", photo: "/images/team/uyen-dinh.png" },
      { name: "Selina Vu", photo: "/images/team/selina-vu.jpg" },
    ],
  },
  {
    tag: "LING",
    name: "Linguistic Intelligence",
    members: [
      { name: "Khanh-Tung Tran", photo: "/images/team/khanh-tung-tran.jpg" },
      { name: "Thai Hoa Tran", photo: "/images/team/thai-hoa-tran.jpg" },
      { name: "Hoang Quoc Viet Pham", photo: "/images/team/hoang-quoc-viet-pham.jpg" },
      { name: "Daniella Traynor", photo: "/images/team/daniella-traynor.jpg" },
      { name: "Duc Luu Le", photo: "/images/team/duc-luu-le.png" },
      { name: "Mai Anh Pham", photo: "/images/team/IMG_5252 - Mai Anh Pham (1).png" },
    ],
  },
  {
    tag: "DECISION",
    name: "Decision Intelligence",
    members: [
      { name: "Dr Preeja Pradeep", photo: "/images/team/preeja-pradeep.jpg" },
      { name: "Joseph Chai", photo: "/images/team/joseph-chai.jpg" },
      { name: "Khoi Hoang", photo: "/images/team/khoi-hoang.jpg" },
      { name: "Ha Nguyen", photo: "/images/team/ha-nguyen.jpg" },
      { name: "Hoang Tu Bui", photo: "/images/team/hoang-tu-bui.jpg" },
      { name: "Hai Long Nguyen", photo: null },
    ],
  },
  {
    tag: "MULTI",
    name: "Multi-Representational Intelligence",
    members: [
      { name: "Dr Eduardo Vyhmeister", photo: "/images/team/eduardo-vyhmeister.jpg" },
      { name: "Duc Hai Nguyen", photo: "/images/team/duc-hai-nguyen.jpg" },
      { name: "Robert Dao", photo: "/images/team/robert-dao.jpg" },
      { name: "Kinza Salim", photo: "/images/team/kinza-salim.jpg" },
      { name: "Le Lai Hoang", photo: "/images/team/le-lai-hoang.jpg" },
      { name: "Incoming RA", photo: null },
    ],
  },
  {
    tag: "SCIQ",
    name: "Scientific and Quantum Intelligence",
    members: [
      { name: "Dr Haseeb Younis", photo: "/images/team/haseeb-younis.jpg" },
      { name: "Muhammad Azeem", photo: "/images/team/muhammad-azeem.jpg" },
      { name: "My Nguyen", photo: "/images/team/my-nguyen.jpg" },
      { name: "Hang Vu", photo: null },
      { name: "Xinggang Ji", photo: "/images/team/vu-xinggang-ji.jpg" },
      { name: "Truong Hoang", photo: "/images/team/truong-hoang-truong-pham.jpg" },
      { name: "Glib Tkachenko", photo: "/images/team/glib-tkachenko.jpg" },
    ],
  },
];
