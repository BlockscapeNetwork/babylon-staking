import {
  Heading,
  HiddenField,
  Text,
  useFormContext,
} from "@babylonlabs-io/bbn-core-ui";

import { FinalityProviderFilter } from "./FinalityProviderFilter";
import { FinalityProviderSearch } from "./FinalityProviderSearch";
import { FinalityProviderTable } from "./FinalityProviderTable";

export const FinalityProviders = () => {
  const { setValue } = useFormContext();

  //! this will be replaced with the blockscape finaliy provider once deployed
  setValue(
    "finalityProvider",
    "affec1bc0666ae26441e34b04d09025ba87b1ff20c4c59a567cb888a90facbd2",
    {
      shouldValidate: true,
      shouldTouch: true,
      shouldDirty: true,
    },
  );
  //! this will be replaced with the blockscape finaliy provider once deployed

  return (
    <div className="flex flex-col gap-4">
      <Heading variant="h5" className="text-primary-dark">
        Step 1
      </Heading>
      <Text variant="body1" className="text-primary-dark">
        Select a Finality Provider
      </Text>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <FinalityProviderSearch />
        </div>
        <div className="w-full md:w-[200px]">
          <FinalityProviderFilter />
        </div>
      </div>

      <FinalityProviderTable
        onSelectRow={(pk) =>
          setValue("finalityProvider", pk, {
            shouldValidate: true,
            shouldTouch: true,
            shouldDirty: true,
          })
        }
      />

      <HiddenField name="finalityProvider" defaultValue="" />
    </div>
  );
};
