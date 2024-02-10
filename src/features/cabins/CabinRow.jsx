import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import useCreateCabin from "./useCreateCabin";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";

// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const CabinRow = ({ cabin }) => {
  const { isDeleting, deleteCabinMutate } = useDeleteCabin();
  const {
    id: cabinId,
    image,
    name,
    maxCapacity,
    regularPrice,
    discount,
    description,
  } = cabin;

  const { isCreating, createCabinMutate } = useCreateCabin();
  const handleDuplicate = () => {
    createCabinMutate({
      name: `copy of ${name}`,
      image,
      maxCapacity,
      regularPrice,
      discount,
      description,
    });
  };
  return (
    <Table.Row>
      <Img src={image} />
      <Cabin>{name}</Cabin>
      <div>Fits up to {maxCapacity} guest</div>
      <Price>{formatCurrency(regularPrice)}</Price>
      <Discount>{formatCurrency(discount)}</Discount>
      <div>
        <Modal>
          <Menus>
            <Menus.Menu>
              <Menus.Toggle id={cabinId} />

              <Menus.List id={cabinId}>
                <Menus.Button
                  onClick={handleDuplicate}
                  icon={<HiSquare2Stack />}
                  disabled={isCreating}
                >
                  Duplicate
                </Menus.Button>
                <Modal.Open opens="cabinEditForm">
                  <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                </Modal.Open>
                <Modal.Open opens="deleteCabin">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="cabinEditForm">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Window name="deleteCabin">
                <ConfirmDelete
                  resourceName="Cabin"
                  disabled={isDeleting}
                  onConfirm={() => deleteCabinMutate(cabinId)}
                ></ConfirmDelete>
              </Modal.Window>
            </Menus.Menu>
          </Menus>
        </Modal>
      </div>
    </Table.Row>
  );
};

export default CabinRow;
